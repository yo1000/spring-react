package com.yo1000.springreact.infrastructure;

import com.yo1000.springreact.domain.*;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.stereotype.Repository;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Repository
public class JdbcWeaponRemodelRepository implements WeaponRemodelRepository {
    private NamedParameterJdbcOperations jdbcOps;

    public JdbcWeaponRemodelRepository(NamedParameterJdbcOperations jdbcOps) {
        this.jdbcOps = jdbcOps;
    }

    @Override
    public List<WeaponRemodel> findAll() {
        return jdbcOps.query("""
                SELECT
                    weapon_remodel.quantity AS quantity,
                    weapon.id AS weapon_id,
                    weapon.name AS weapon_name,
                    weapon.price AS weapon_price,
                    weapon.str AS weapon_str,
                    weapon.hit AS weapon_hit,
                    item.id AS item_id,
                    item.name AS item_name,
                    item.price AS item_price,
                    item.sell_price AS item_sell_price
                FROM
                    weapon
                LEFT OUTER JOIN
                    weapon_remodel
                    ON weapon.id = weapon_remodel.weapon_id
                LEFT OUTER JOIN
                    item
                    ON weapon_remodel.item_id = item.id
                ORDER BY
                    weapon_remodel.id
                """,
                Collections.emptyMap(),
                (rs, rowNum) -> new WeaponRemodelResult(
                        new Weapon(
                                rs.getInt("weapon_id"),
                                rs.getString("weapon_name"),
                                rs.getObject("weapon_price", Integer.class),
                                rs.getInt("weapon_str"),
                                rs.getInt("weapon_hit")
                        ),
                        new Item(
                                rs.getInt("item_id"),
                                rs.getString("item_name"),
                                rs.getObject("item_price", Integer.class),
                                rs.getObject("item_sell_price", Integer.class)
                        ),
                        rs.getInt("quantity")
                ))
                .stream()
                .collect(Collectors.toMap(
                        WeaponRemodelResult::weapon,
                        v -> Stream.of(new WeaponRemodel.ItemQuantity(v.item, v.itemQuantity)),
                        Stream::concat)
                ).entrySet()
                .stream()
                .map(entry -> new WeaponRemodel(
                        entry.getKey(),
                        entry.getValue().collect(Collectors.toList()))
                ).collect(Collectors.toList());
    }

    @Override
    public List<WeaponRemodel> findAllByWeaponNameContaining(String weaponName) {
        return jdbcOps.query("""
                SELECT
                    weapon_remodel.quantity AS quantity,
                    weapon.id AS weapon_id,
                    weapon.name AS weapon_name,
                    weapon.price AS weapon_price,
                    weapon.str AS weapon_str,
                    weapon.hit AS weapon_hit,
                    item.id AS item_id,
                    item.name AS item_name,
                    item.price AS item_price,
                    item.sell_price AS item_sell_price
                FROM
                    weapon
                LEFT OUTER JOIN
                    weapon_remodel
                    ON weapon.id = weapon_remodel.weapon_id
                LEFT OUTER JOIN
                    item
                    ON weapon_remodel.item_id = item.id
                WHERE
                    weapon.name = :weaponName
                ORDER BY
                    weapon_remodel.id
                """,
                Map.ofEntries(
                        Map.entry("weaponName", weaponName)
                ),
                (rs, rowNum) -> new WeaponRemodelResult(
                        new Weapon(
                                rs.getInt("weapon_id"),
                                rs.getString("weapon_name"),
                                rs.getObject("weapon_price", Integer.class),
                                rs.getInt("weapon_str"),
                                rs.getInt("weapon_hit")
                        ),
                        new Item(
                                rs.getInt("item_id"),
                                rs.getString("item_name"),
                                rs.getObject("item_price", Integer.class),
                                rs.getObject("item_sell_price", Integer.class)
                        ),
                        rs.getInt("quantity")
                ))
                .stream()
                .collect(Collectors.toMap(
                        WeaponRemodelResult::weapon,
                        v -> Stream.of(new WeaponRemodel.ItemQuantity(v.item, v.itemQuantity)),
                        Stream::concat)
                ).entrySet().stream()
                .map(entry -> new WeaponRemodel(
                        entry.getKey(),
                        entry.getValue().collect(Collectors.toList()))
                ).collect(Collectors.toList());
    }

    @Override
    public WeaponRemodel findByWeaponId(int weaponId) {
        return jdbcOps.query("""
                SELECT
                    weapon_remodel.quantity AS quantity,
                    weapon.id AS weapon_id,
                    weapon.name AS weapon_name,
                    weapon.price AS weapon_price,
                    weapon.str AS weapon_str,
                    weapon.hit AS weapon_hit,
                    item.id AS item_id,
                    item.name AS item_name,
                    item.price AS item_price,
                    item.sell_price AS item_sell_price
                FROM
                    weapon
                LEFT OUTER JOIN
                    weapon_remodel
                    ON weapon.id = weapon_remodel.weapon_id
                LEFT OUTER JOIN
                    item
                    ON weapon_remodel.item_id = item.id
                WHERE
                    weapon.id = :weaponId
                ORDER BY
                    weapon_remodel.id
                """,
                Map.ofEntries(
                        Map.entry("weaponId", weaponId)
                ),
                (rs, rowNum) -> new WeaponRemodelResult(
                        new Weapon(
                                rs.getInt("weapon_id"),
                                rs.getString("weapon_name"),
                                rs.getObject("weapon_price", Integer.class),
                                rs.getInt("weapon_str"),
                                rs.getInt("weapon_hit")
                        ),
                        new Item(
                                rs.getInt("item_id"),
                                rs.getString("item_name"),
                                rs.getObject("item_price", Integer.class),
                                rs.getObject("item_sell_price", Integer.class)
                        ),
                        rs.getInt("quantity")
                ))
                .stream()
                .collect(Collectors.toMap(
                        WeaponRemodelResult::weapon,
                        v -> Stream.of(new WeaponRemodel.ItemQuantity(v.item, v.itemQuantity)),
                        Stream::concat)
                ).entrySet().stream()
                .map(entry -> new WeaponRemodel(
                        entry.getKey(),
                        entry.getValue().collect(Collectors.toList()))
                )
                .findFirst()
                .orElse(null);
    }

    private record WeaponRemodelResult(
            Weapon weapon,
            Item item,
            int itemQuantity
    ) {}
}
