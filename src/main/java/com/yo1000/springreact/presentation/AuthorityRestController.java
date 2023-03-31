package com.yo1000.springreact.presentation;

import com.yo1000.springreact.config.SecurityConfig;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/authorities")
public class AuthorityRestController {
    private SecurityConfig.SecurityProperties props;

    public AuthorityRestController(
            SecurityConfig.SecurityProperties props
    ) {
        this.props = props;
    }

    @GetMapping
    public List<Authority> get(JwtAuthenticationToken principal) {
        Collection<String> authorities = principal.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .toList();

        return props.requests().stream().flatMap(request -> Optional.ofNullable(request.methods())
                .orElse(Collections.singletonList("*"))
                .stream()
                .map(String::toUpperCase)
                .map(m -> new Authority(request.uri(), m,
                        request.authorities() == null || request.authorities().isEmpty() || request.authorities()
                                .stream().anyMatch(authorities::contains)
                ))
        ).toList();
    }

    record Authority(
            String uri,
            String method,
            boolean authorized
    ) {}
}
