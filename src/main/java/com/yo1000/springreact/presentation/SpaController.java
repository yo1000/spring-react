package com.yo1000.springreact.presentation;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
class SpaController {
    @GetMapping("/**/{path:[^.]*}")
    public String get() {
        return "forward:/index.html";
    }
}
