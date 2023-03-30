package com.yo1000.springreact.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.List;

/**
 *
 * @author yo1000
 */
@Configuration
@EnableConfigurationProperties(WebConfig.WebConfigurationProperties.class)
public class WebConfig {
    @ConfigurationProperties(prefix = "app.web")
    public record WebConfigurationProperties(
        List<String> allowedOrigins
    ) {}
}
