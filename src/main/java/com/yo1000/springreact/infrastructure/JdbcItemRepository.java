package com.yo1000.springreact.infrastructure;

import com.yo1000.springreact.domain.Item;
import com.yo1000.springreact.domain.ItemRepository;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.stereotype.Repository;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@Repository
public class JdbcItemRepository implements ItemRepository {
    private NamedParameterJdbcOperations jdbcOps;

    public JdbcItemRepository(NamedParameterJdbcOperations jdbcOps) {
        this.jdbcOps = jdbcOps;
    }

    @Override
    public List<Item> findAll() {
        return jdbcOps.query("""
                SELECT
                    id,
                    name,
                    price,
                    sell_price
                FROM
                    item
                ORDER BY
                    id
                """,
                Collections.emptyMap(),
                (rs, rowNum) -> {
                    return new Item(
                            rs.getInt("id"),
                            rs.getString("name"),
                            rs.getObject("price", Integer.class),
                            rs.getObject("sell_price", Integer.class)
                    );
                }
        );
    }

    @Override
    public List<Item> findAllByNameContaining(String name) {
        return jdbcOps.query("""
                SELECT
                    id,
                    name,
                    price,
                    sell_price
                FROM
                    item
                WHERE
                    name LIKE concat('%', :name, '%')
                ORDER BY
                    id
                """,
                Map.ofEntries(
                        Map.entry("name", name)
                ),
                (rs, rowNum) -> {
                    return new Item(
                            rs.getInt("id"),
                            rs.getString("name"),
                            rs.getObject("price", Integer.class),
                            rs.getObject("sell_price", Integer.class)
                    );
                }
        );
    }

    @Override
    public Item findById(int id) {
        return jdbcOps.query("""
                SELECT
                    id,
                    name,
                    price,
                    sell_price
                FROM
                    item
                WHERE
                    id = :id
                """,
                Map.ofEntries(
                        Map.entry("id", id)
                ),
                rs -> {
                    rs.next();
                    return new Item(
                            rs.getInt("id"),
                            rs.getString("name"),
                            rs.getObject("price", Integer.class),
                            rs.getObject("sell_price", Integer.class)
                    );
                }
        );
    }
}
