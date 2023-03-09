package com.yo1000.springreact.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableConfigurationProperties(FrontendConfig.FrontendProperties.class)
public class FrontendConfig {
    @ConfigurationProperties(prefix = "app.frontend")
    public record FrontendProperties(
            OidcProperties oidc
    ) {
        public record OidcProperties(
                String authority,
                String redirectUri,
                String clientId,
                String authorizationEndpoint,
                String tokenEndpoint,
                String userinfoEndpoint,
                String signoutUriTemplate
        ) {}
    }
}
