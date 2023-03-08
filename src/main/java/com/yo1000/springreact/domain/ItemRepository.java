package com.yo1000.springreact.domain;

import java.util.List;

public interface ItemRepository {
    List<Item> findAll();
    List<Item> findAllByNameContaining(String name);

    Item findById(int id);
}
