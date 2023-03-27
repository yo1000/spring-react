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
    <DataTable
      id="dataTable"
      data={items}
      props={[{
        name: "id",
        head: "ID",
      }, {
        name: "name",
        head: "Name",
      }, {
        name: "price",
        head: "Price",
      }, {
        name: "sellPrice",
        head: "SellPrice",
      }]}
    />
  )
}
