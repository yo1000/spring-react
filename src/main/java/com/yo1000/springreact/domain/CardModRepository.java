package com.yo1000.springreact.domain;

import java.util.List;

public interface CardModRepository {
    List<CardMod> findAll();
    CardMod findById(int id);
}
