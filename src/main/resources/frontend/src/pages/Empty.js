import React from "react";
import DataTable from "../components/DataTable";
import Content from "../components/Content";

export default function Empty() {
  return (
    <Content heading="Empty">
      <DataTable
        id="dataTable"
        data={[]}
        props={[{
          name: "id",
          head: "ID",
          columnWidth: "5rem",
        }, {
          name: "code",
          head: "Code",
          columnWidth: "5rem",
        }, {
          name: "name",
          head: "Name",
          columnWidth: "15rem",
        }, {
          name: "type",
          head: "****",
          columnWidth: "10rem",
        }, {
          name: "level",
          head: "*****",
          columnWidth: "5rem",
          digitGrouping: true,
        }, {
          name: "elemental",
          head: "*********",
          columnWidth: "10rem",
        }, {
          name: "top",
          head: "***",
          columnWidth: "5rem",
          digitGrouping: true,
        }, {
          name: "right",
          head: "*****",
          columnWidth: "5rem",
          digitGrouping: true,
        }, {
          name: "bottom",
          head: "******",
          columnWidth: "5rem",
          digitGrouping: true,
        }, {
          name: "left",
          head: "****",
          columnWidth: "5rem",
          digitGrouping: true,
        }, {
          name: "cardQuantity",
          head: "**** ***",
          columnWidth: "5rem",
          digitGrouping: true,
        }, {
          name: "itemName",
          head: "**** ****",
          columnWidth: "15rem",
        }, {
          name: "itemQuantity",
          head: "**** ***",
          columnWidth: "5rem",
          digitGrouping: true,
        }]}
      />
    </Content>
  )
}
