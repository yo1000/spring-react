package com.yo1000.springreact.presentation;

import com.yo1000.springreact.config.FrontendConfig;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/config")
public class ConfigRestController {
    private FrontendConfig.FrontendProperties props;

    public ConfigRestController(FrontendConfig.FrontendProperties props) {
        this.props = props;
    }

    @GetMapping
    public FrontendConfig.FrontendProperties get() {
        return props;
    }
}
