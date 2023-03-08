package com.yo1000.springreact.infrastructure;

import com.yo1000.springreact.domain.Weapon;
import com.yo1000.springreact.domain.WeaponRepository;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.stereotype.Repository;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@Repository
public class JdbcWeaponRepository implements WeaponRepository {
    private NamedParameterJdbcOperations jdbcOps;

    public JdbcWeaponRepository(NamedParameterJdbcOperations jdbcOps) {
        this.jdbcOps = jdbcOps;
    }

    @Override
    public List<Weapon> findAll() {
        return jdbcOps.query("""
                SELECT
                    id,
                    name,
                    price,
                    str,
                    hit
                FROM
                    weapon
                ORDER BY
                    id
                """,
                Collections.emptyMap(),
                (rs, rowNum) -> {
                    return new Weapon(
                            rs.getInt("id"),
                            rs.getString("name"),
                            rs.getObject("price", Integer.class),
                            rs.getInt("str"),
                            rs.getInt("hit")
                    );
                }
        );
    }

    @Override
    public List<Weapon> findAllByNameContaining(String name) {
        return jdbcOps.query("""
                SELECT
                    id,
                    name,
                    price,
                    str,
                    hit
                FROM
                    weapon
                WHERE
                    name LIKE concat('%', :name, '%')
                ORDER BY
                    id
                """,
                Map.ofEntries(
                        Map.entry("name", name)
                ),
                (rs, rowNum) -> {
                    return new Weapon(
                            rs.getInt("id"),
                            rs.getString("name"),
                            rs.getObject("price", Integer.class),
                            rs.getInt("str"),
                            rs.getInt("hit")
                    );
                }
        );
    }

    @Override
    public Weapon findById(int id) {
        return jdbcOps.query("""
                SELECT
                    id,
                    name,
                    price,
                    str,
                    hit
                FROM
                    weapon
                WHERE
                    id = :id
                """,
                Map.ofEntries(
                        Map.entry("id", id)
                ),
                rs -> {
                    rs.next();
                    return new Weapon(
                            rs.getInt("id"),
                            rs.getString("name"),
                            rs.getObject("price", Integer.class),
                            rs.getInt("str"),
                            rs.getInt("hit")
                    );
                }
        );
    }
}
