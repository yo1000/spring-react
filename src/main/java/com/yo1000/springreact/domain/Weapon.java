package com.yo1000.springreact.domain;

public record Weapon(
        int id,
        String name,
        Integer price,
        int str,
        int hit
) {}
