package com.yo1000.springreact.presentation;

import com.yo1000.springreact.domain.Item;
import com.yo1000.springreact.domain.ItemRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/items")
public class ItemRestController {
    private ItemRepository itemRepos;

    public ItemRestController(ItemRepository itemRepos) {
        this.itemRepos = itemRepos;
    }

    @GetMapping
    public List<Item> getByName(
            @RequestParam(name = "name", required = false)
            String name
    ) {
        if (name == null) {
            return itemRepos.findAll();
        } else {
            return itemRepos.findAllByNameContaining(name);
        }
    }

    @GetMapping("/{id}")
    public Item getById(
            @PathVariable("id")
            int id
    ) {
        return itemRepos.findById(id);
    }

}
