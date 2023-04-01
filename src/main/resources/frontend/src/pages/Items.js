import {useAuth} from "react-oidc-context";
import React, {useEffect, useState} from "react";
import DataTable from "../components/DataTable";
import ItemsClient from "../clients/ItemsClient";

export default function Items() {
  const auth = useAuth()
  const [items, setItems] = useState([])

  const itemsClient = new ItemsClient(auth)

  useEffect(() => {
    itemsClient
      .get()
      .then(data => setItems(data.map(d => ({
        ...d,
        "code": (typeof d.id === "number"
          ? d.id.toString(16).toUpperCase().padStart(2, "0")
          : d.id),
      }))))
  }, [auth])

  return (
    <DataTable
      id="dataTable"
      data={items}
      props={[{
        name: "id",
        head: "ID",
      }, {
        name: "code",
        head: "Code",
      }, {
        name: "name",
        head: "Name",
      }, {
        name: "price",
        head: "Price",
        digitGrouping: true,
      }, {
        name: "sellPrice",
        head: "SellPrice",
        digitGrouping: true,
      }]}
    />
  )
}
