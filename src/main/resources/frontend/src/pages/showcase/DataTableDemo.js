import React from "react";
import DataTable from "../../components/DataTable";
import Content from "../../components/Content";

export default function DataTableDemo() {
  return (
    <Content heading="DataTable Demo">
      <DataTable
        id="dataTable"
        data={[{
          seq: 1,
          japanese: "ジャンクション",
          english: "Junction",
        }, {
          seq: 2,
          japanese: "アイテム",
          english: "Item",
        }, {
          seq: 3,
          japanese: "まほう",
          english: "Magic",
        }, {
          seq: 4,
          japanese: "ステータス",
          english: "Status",
        }, {
          seq: 5,
          japanese: "Ｇ.Ｆ.",
          english: "GF",
        }, {
          seq: 6,
          japanese: "アビリティ",
          english: "Ability",
        }, {
          seq: 7,
          japanese: "いれかえ",
          english: "Switch",
        }, {
          seq: 8,
          japanese: "カード",
          english: "Card",
        }, {
          seq: 9,
          japanese: "コンフィグ",
          english: "Config",
        }, {
          seq: 10,
          japanese: "チュートリアル",
          english: "Tutorial",
        }, {
          seq: 11,
          japanese: "セーブ",
          english: "Save",
        }]}
        props={[{
          name: "seq",
          head: "#",
          columnWidth: "5rem",
        }, {
          name: "japanese",
          head: "Japanese",
          columnWidth: "50rem",
        }, {
          name: "english",
          head: "English",
          columnWidth: "50rem",
        }]}
      />
    </Content>
  )
}
