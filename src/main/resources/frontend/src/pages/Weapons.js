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
      "code": (typeof d.weapon.id === "number"
        ? d.weapon.id.toString(16).toUpperCase().padStart(2, "0")
        : d.weapon.id),
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
    <DataTable
      id="dataTable"
      data={weapons}
      props={[{
        name: "id",
        head: "Name",
      }, {
        name: "code",
        head: "Code",
      }, {
        name: "name",
        head: "Name",
        editable: true,
      }, {
        name: "price",
        head: "Price",
        editable: true,
        digitGrouping: true,
      }, {
        name: "str",
        head: "Str",
        editable: true,
        digitGrouping: true,
      }, {
        name: "hit",
        head: "Hit",
        editable: true,
        digitGrouping: true,
      }, {
        name: "items.name",
        head: "Remodel item",
        editable: true,
      }, {
        name: "items.quantity",
        head: "Remodel qty",
        editable: true,
        digitGrouping: true,
      }]}
      autoSelect={true}
    />
  )
}
