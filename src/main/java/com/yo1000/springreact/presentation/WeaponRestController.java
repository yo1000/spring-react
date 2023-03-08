package com.yo1000.springreact.presentation;

import com.yo1000.springreact.domain.Weapon;
import com.yo1000.springreact.domain.WeaponRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/weapons")
public class WeaponRestController {
    private WeaponRepository weaponRepos;

    public WeaponRestController(WeaponRepository weaponRepos) {
        this.weaponRepos = weaponRepos;
    }

    @GetMapping
    public List<Weapon> getByName(
            @RequestParam(name = "name", required = false)
            String name
    ) {
        if (name == null) {
            return weaponRepos.findAll();
        } else {
            return weaponRepos.findAllByNameContaining(name);
        }
    }

    @GetMapping("/{id}")
    public Weapon getById(
            @PathVariable("id")
            int id
    ) {
        return weaponRepos.findById(id);
    }

}
