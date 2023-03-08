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
    .then(data => setWeapons(data))
  }, [auth])

  return (
    <DataTable keys={["id", "name", "price", "str", "hit"]} data={weapons} head={{
      "id": "ID",
      "name": "Name",
      "price": "Price",
      "str": "Str",
      "hit": "Hit"
    }}/>
  )
}
