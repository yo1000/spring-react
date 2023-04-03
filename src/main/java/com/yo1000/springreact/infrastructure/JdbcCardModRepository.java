package com.yo1000.springreact.infrastructure;

import com.yo1000.springreact.domain.*;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.stereotype.Repository;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@Repository
public class JdbcCardModRepository implements CardModRepository {
    private NamedParameterJdbcOperations jdbcOps;

    public JdbcCardModRepository(NamedParameterJdbcOperations jdbcOps) {
        this.jdbcOps = jdbcOps;
    }

    /**
     * CardとItemを結合して、CardModを作成する
     * @return
     */
    @Override
    public List<CardMod> findAll() {
        return jdbcOps.query("""
                SELECT
                    card_mod.id                 AS card_mod_id,
                    card_mod.card_id            AS card_id,
                    card_mod.card_quantity      AS card_quantity,
                    card.name                   AS card_name,
                    card.level                  AS card_level,
                    card.element_id             AS card_element_id,
                    element.name                AS card_element_name,
                    card.top                    AS card_top,
                    card."right"                AS card_right,
                    card.bottom                 AS card_bottom,
                    card."left"                 AS card_left,
                    card_mod.item_id            AS item_id,
                    card_mod.item_quantity      AS item_quantity,
                    item.name                   AS item_name,
                    item.price                  AS item_price,
                    item.sell_price             AS item_sell_price
                FROM
                    card_mod
                INNER JOIN card
                    ON  card_mod.card_id = card.id
                INNER JOIN item
                    ON  card_mod.item_id = item.id
                LEFT OUTER JOIN element
                    ON  card.element_id = element.id
                ORDER BY
                    card_mod.id,
                    card_mod.card_id,
                    card_mod.item_id
                """,
                Collections.emptyMap(),
                (rs, rowNum) -> new CardMod(
                        rs.getInt("card_mod_id"),
                        new Card(
                                rs.getInt("card_id"),
                                rs.getString("card_name"),
                                rs.getInt("card_level"),
                                rs.getObject("card_element_id", Integer.class) != null
                                        ? new Element(
                                                rs.getInt("card_element_id"),
                                                rs.getString("card_element_name")
                                        )
                                        : null,
                                rs.getInt("card_top"),
                                rs.getInt("card_right"),
                                rs.getInt("card_bottom"),
                                rs.getInt("card_left")
                        ),
                        rs.getInt("card_quantity"),
                        new Item(
                                rs.getInt("item_id"),
                                rs.getString("item_name"),
                                rs.getObject("item_price", Integer.class),
                                rs.getObject("item_sell_price", Integer.class)
                        ),
                        rs.getInt("item_quantity")
                )
        );
    }

    @Override
    public CardMod findById(int id) {
        return jdbcOps.queryForObject("""
                SELECT
                    card_mod.id                 AS id,
                    card_mod.card_id            AS card_id,
                    card_mod.card_quantity      AS card_quantity,
                    card.name                   AS card_name,
                    card.level                  AS card_level,
                    card.element_id             AS card_element_id,
                    card.element_name           AS card_element_name,
                    card.top                    AS card_top,
                    card.right                  AS card_right,
                    card.bottom                 AS card_bottom,
                    card.left                   AS card_left,
                    card_mod.item_id            AS item_id,
                    card_mod.item_quantity      AS item_quantity,
                    item.name                   AS item_name,
                    item.price                  AS item_price,
                    item.sell_price             AS item_sell_price
                FROM
                    card_mod
                INNER JOIN card
                    ON  card_mod.card_id = card.id
                LEFT OUTER JOIN element
                    ON  card.element_id = element.id
                INNER JOIN item
                    ON  card_mod.item_id = item.id
                WHERE
                    card_mod.id = :id
                ORDER BY
                    card_mod.id,
                    card_mod.card_id,
                    card_mod.item_id
                """,
                Map.ofEntries(
                        Map.entry("id", id)
                ),
                (rs, rowNum) -> new CardMod(
                        rs.getInt("id"),
                        new Card(
                                rs.getInt("card_id"),
                                rs.getString("card_name"),
                                rs.getInt("card_level"),
                                rs.getObject("card_element_id", Integer.class) != null
                                        ? new Element(
                                        rs.getInt("card_element_id"),
                                        rs.getString("card_element_name")
                                )
                                        : null,
                                rs.getInt("card_top"),
                                rs.getInt("card_right"),
                                rs.getInt("card_bottom"),
                                rs.getInt("card_left")
                        ),
                        rs.getInt("card_quantity"),
                        new Item(
                                rs.getInt("item_id"),
                                rs.getString("item_name"),
                                rs.getObject("item_price", Integer.class),
                                rs.getObject("item_sell_price", Integer.class)
                        ),
                        rs.getInt("item_quantity")
                )
        );
    }
}
