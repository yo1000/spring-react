package com.yo1000.springreact.config;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.converter.Converter;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AuthorizeHttpRequestsConfigurer;
import org.springframework.security.config.annotation.web.configurers.oauth2.server.resource.OAuth2ResourceServerConfigurer;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Configuration
@EnableWebSecurity
@EnableConfigurationProperties({
        SecurityConfig.SecurityProperties.class
})
public class SecurityConfig {
    private SecurityProperties props;

    public SecurityConfig(SecurityProperties props) {
        this.props = props;
    }

    @Bean
    public SecurityFilterChain filterChain(
            HttpSecurity httpSecurity
    ) throws Exception {
        httpSecurity
                .authorizeHttpRequests(registry -> {
                    Optional.ofNullable(props.requests).orElse(Collections.emptyList()).forEach(request -> {
                        List<HttpMethod> methods = Optional.ofNullable(request.methods)
                                .orElse(Collections.emptyList()).stream()
                                .map(m -> HttpMethod.valueOf(m.toUpperCase()))
                                .toList();

                        final List<AuthorizeHttpRequestsConfigurer<HttpSecurity>.AuthorizedUrl> authorizedUrls;
                        if (methods.isEmpty()) {
                            authorizedUrls = Collections.singletonList(registry.requestMatchers(request.uri));
                        } else {
                            authorizedUrls = methods.stream().map(m -> registry.requestMatchers(m, request.uri)).toList();
                        }

                        final List<String> authorities = Optional.ofNullable(request.authorities)
                                .orElse(Collections.emptyList());
                        authorizedUrls.forEach(authorizedUrl -> {
                            if (authorities.isEmpty()) {
                                authorizedUrl.authenticated();
                            } else {
                                authorizedUrl.hasAnyAuthority(authorities.toArray(new String[0]));
                            }
                        });
                    });
                    registry.anyRequest().permitAll();
                })
                .oauth2ResourceServer(OAuth2ResourceServerConfigurer::jwt)
                .csrf().disable()
                .cors();

        return httpSecurity.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(props.cors().allowedOrigins());
        configuration.setAllowedMethods(List.of(
                HttpMethod.GET.name(),
                HttpMethod.POST.name(),
                HttpMethod.PUT.name(),
                HttpMethod.PATCH.name(),
                HttpMethod.DELETE.name(),
                HttpMethod.OPTIONS.name()
        ));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    // for Keycloak
    @ConditionalOnProperty(name = "app.security.idp", havingValue = "keycloak")
    @Bean
    public JwtAuthenticationConverter keycloakJwtAuthenticationConverter() {
        Converter<Jwt, Collection<GrantedAuthority>> converter = source -> {
            Map<String, Object> realmAccess = source.getClaimAsMap("realm_access");
            List<String> realmRoles = (List<String>) realmAccess.get("roles");

            Map<String, Object> resourceAccess = source.getClaimAsMap("resource_access");
            List<String> resourceRoles = resourceAccess.entrySet().stream()
                    .flatMap(entry -> ((Map<String, List<String>>) entry.getValue()).get("roles").stream()
                            .map(name -> entry.getKey() + "." + name))
                    .toList();

            Collection<GrantedAuthority> roles = Stream.concat(realmRoles.stream(), resourceRoles.stream())
                    .map(SimpleGrantedAuthority::new)
                    .collect(Collectors.toCollection(ArrayList::new));

            return roles;
        };

        JwtAuthenticationConverter jwtAuthenticationConverter = new JwtAuthenticationConverter();
        jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(converter);
        return jwtAuthenticationConverter;
    }

    // for Cognito
    @ConditionalOnProperty(name = "app.security.idp", havingValue = "cognito")
    @Bean
    public JwtAuthenticationConverter cognitoJwtAuthenticationConverter() {
        Converter<Jwt, Collection<GrantedAuthority>> converter = source -> {
            List<String> cognitoGroups = source.getClaimAsStringList("cognito:groups");

            Collection<GrantedAuthority> roles = cognitoGroups.stream()
                    .map(SimpleGrantedAuthority::new)
                    .collect(Collectors.toCollection(ArrayList::new));

            return roles;
        };

        JwtAuthenticationConverter jwtAuthenticationConverter = new JwtAuthenticationConverter();
        jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(converter);
        return jwtAuthenticationConverter;
    }

    @ConfigurationProperties(prefix = "app.security")
    public record SecurityProperties(
            String idp,
            List<Request> requests,
            Cors cors
    ) {
        public record Request(
                String uri,
                List<String> methods,
                List<String> authorities
        ) {}

        public record Cors(
                List<String> allowedOrigins
        ) {}
    }
}
