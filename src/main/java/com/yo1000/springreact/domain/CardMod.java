package com.yo1000.springreact.domain;

public record CardMod(
        int id,
        Card card,
        int cardQuantity,
        Item item,
        int itemQuantity
) {}
