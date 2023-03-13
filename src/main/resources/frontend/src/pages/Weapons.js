import {useAuth} from "react-oidc-context";
import React, {useEffect, useState} from "react";
import DataTable from "../components/DataTable";

export default function Weapons() {
  const apiBaseUri = process.env.API_BASE_URI || ''

  const auth = useAuth()

  const [weapons, setWeapons] = useState([])

  useEffect(() => {
    const token = auth.user?.access_token

    fetch(`${apiBaseUri}/api/weapons`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(resp => resp.json())
    .then(data => data.map(d => ({
      "id": d.weapon.id,
      "name": d.weapon.name,
      "price": d.weapon.price,
      "str": d.weapon.str,
      "hit": d.weapon.hit,
      "items": d.itemQuantities.map(itemQty => ({
        "name": itemQty.item.name,
        "quantity": itemQty.quantity,
      })),
    })).sort((a, b) => a.id - b.id))
    .then(data => setWeapons(data))
  }, [auth])

  return (
    <DataTable data={weapons} keys={[
      "id",
      "name",
      "price",
      "str",
      "hit",
      "items.name",
      "items.quantity",
    ]} head={{
      "id": "ID",
      "name": "Name",
      "price": "Price",
      "str": "Str",
      "hit": "Hit",
      "items.name": "Remodel item",
      "items.quantity": "Remodel qty",
    }} editableKeys={[
      "name",
      "price",
      "str",
      "hit",
      "items.name",
      "items.quantity",
    ]} />
  )
}
