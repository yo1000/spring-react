package com.yo1000.springreact.domain;

import java.util.List;

public record WeaponRemodel(
        Weapon weapon,
        List<ItemQuantity> itemQuantities
) {
    public record ItemQuantity(
            Item item,
            int quantity
    ) {}
}
