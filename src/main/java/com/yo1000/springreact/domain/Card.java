package com.yo1000.springreact.domain;

public record Card(
        int id,
        String name,
        int level,
        Element elemental,
        int top,
        int right,
        int bottom,
        int left
) {}
