package com.yo1000.springreact.domain;

import java.util.List;

public interface WeaponRepository {
    List<Weapon> findAll();
    List<Weapon> findAllByNameContaining(String name);

    Weapon findById(int id);
}
