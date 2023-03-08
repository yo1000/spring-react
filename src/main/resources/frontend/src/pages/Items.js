import {useAuth} from "react-oidc-context";
import React, {useEffect, useState} from "react";
import DataTable from "../components/DataTable";

export default function Items() {
  const apiBaseUri = process.env.API_BASE_URI || ''

  const auth = useAuth()

  const [items, setItems] = useState([])

  useEffect(() => {
    const token = auth.user?.access_token

    fetch(`${apiBaseUri}/api/items`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(resp => resp.json())
    .then(data => setItems(data))
  }, [auth])

  return (
    <DataTable keys={["id", "name", "price", "sellPrice"]} data={items} head={{
      "id": "ID",
      "name": "Name",
      "price": "Price",
      "sellPrice": "Sell price"
    }} editable={true} combinationKey="alt"/>
  )
}
