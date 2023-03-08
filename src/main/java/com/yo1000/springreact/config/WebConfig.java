package com.yo1000.springreact.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

/**
 *
 * @author yo1000
 */
@Configuration
@EnableConfigurationProperties(WebConfig.WebConfigurationProperties.class)
public class WebConfig {
    private WebConfigurationProperties props;

    public WebConfig(WebConfigurationProperties props) {
        this.props = props;
    }

    @Bean
    WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                WebMvcConfigurer.super.addCorsMappings(registry);

                if (props.allowedOrigins() == null || props.allowedOrigins().isEmpty())
                    return;

                registry.addMapping("/**")
                        .allowedOrigins(
                                props.allowedOrigins().toArray(new String[0])
                        )
                        .allowedMethods(
                                HttpMethod.GET.name(),
                                HttpMethod.POST.name(),
                                HttpMethod.PUT.name(),
                                HttpMethod.PATCH.name(),
                                HttpMethod.DELETE.name(),
                                HttpMethod.OPTIONS.name()
                        );
            }
        };
    }

    @ConfigurationProperties(prefix = "app.web")
    public record WebConfigurationProperties(
        List<String> allowedOrigins
    ) {}
}
