package com.yo1000.springreact.presentation;

import com.yo1000.springreact.domain.WeaponRemodel;
import com.yo1000.springreact.domain.WeaponRemodelRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/weapons")
public class WeaponRestController {
    private WeaponRemodelRepository weaponRemodelRepos;

    public WeaponRestController(WeaponRemodelRepository weaponRemodelRepos) {
        this.weaponRemodelRepos = weaponRemodelRepos;
    }

    @GetMapping
    public List<WeaponRemodel> getByName(
            @RequestParam(name = "name", required = false)
            String name
    ) {
        if (name == null) {
            return weaponRemodelRepos.findAll();
        } else {
            return weaponRemodelRepos.findAllByWeaponNameContaining(name);
        }
    }

    @GetMapping("/{id}")
    public WeaponRemodel getById(
            @PathVariable("id")
            int id
    ) {
        return weaponRemodelRepos.findByWeaponId(id);
    }
}
