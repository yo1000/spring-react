package com.yo1000.springreact.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;

@Configuration
@EnableConfigurationProperties(ReportConfig.ReportProperties.class)
public class ReportConfig {
    @ConfigurationProperties(prefix = "app.report")
    public record ReportProperties(
            FontSetProperties fonts
    ) {
        public record FontSetProperties(
                FontProperties gothic,
                FontProperties gothicMonospace
        ) {
            public record FontProperties(
                    String name,
                    Resource resource
            ) {}
        }
    }
}
