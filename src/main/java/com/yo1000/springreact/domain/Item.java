package com.yo1000.springreact.domain;

public record Item(
        int id,
        String name,
        Integer price,
        Integer sellPrice
) {}
