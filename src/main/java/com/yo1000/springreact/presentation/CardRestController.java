package com.yo1000.springreact.presentation;

import com.yo1000.springreact.domain.CardMod;
import com.yo1000.springreact.domain.CardModRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/cards")
public class CardRestController {
    private CardModRepository cardModRepos;

    public CardRestController(CardModRepository cardModRepos) {
        this.cardModRepos = cardModRepos;
    }

    @GetMapping
    public List<CardMod> get() {
        return cardModRepos.findAll();
    }
}
