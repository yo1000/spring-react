package com.yo1000.springreact.domain;

import java.util.List;

public interface WeaponRemodelRepository {
    List<WeaponRemodel> findAll();
    List<WeaponRemodel> findAllByWeaponNameContaining(String weaponName);

    WeaponRemodel findByWeaponId(int weaponId);
}
