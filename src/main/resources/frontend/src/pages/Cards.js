import {useAuth} from "react-oidc-context";
import React, {useEffect, useState} from "react";
import DataTable from "../components/DataTable";
import CardsClient from "../clients/CardsClient";
import Content from "../components/Content";

export default function Cards() {
  const auth = useAuth()
  const [cards, setCards] = useState([])

  const cardsClient = new CardsClient(auth)

  useEffect(() => {
    cardsClient
      .get()
      .then(data => setCards(data.map(d => ({
        ...d,
        "code": (typeof d.id === "number"
          ? (d.id + 0x77).toString(16).toUpperCase().padStart(2, "0")
          : d.id),
      }))))
  }, [auth])

  return (
    <Content heading="Cards">
      <DataTable
        id="dataTable"
        data={cards.map(cardMod => ({
          ...cardMod,
          name: cardMod.card.name,
          level: cardMod.card.level,
          type: cardMod.card.level <= 5 ? "MONSTER"
            : cardMod.card.level <= 7 ? "BOSS"
              : cardMod.card.level <= 9 ? "GF"
                : "PLAYER",
          elemental: cardMod.card.elemental ? cardMod.card.elemental.name : "", // "N/A",
          top: cardMod.card.top,
          right: cardMod.card.right,
          bottom: cardMod.card.bottom,
          left: cardMod.card.left,
          itemName: cardMod.item.name,
        }))}
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
          head: "Type",
          columnWidth: "10rem",
        }, {
          name: "level",
          head: "Level",
          columnWidth: "5rem",
          digitGrouping: true,
        }, {
          name: "elemental",
          head: "Elemental",
          columnWidth: "10rem",
        }, {
          name: "top",
          head: "Top",
          columnWidth: "5rem",
          digitGrouping: true,
        }, {
          name: "right",
          head: "Right",
          columnWidth: "5rem",
          digitGrouping: true,
        }, {
          name: "bottom",
          head: "Bottom",
          columnWidth: "5rem",
          digitGrouping: true,
        }, {
          name: "left",
          head: "Left",
          columnWidth: "5rem",
          digitGrouping: true,
        }, {
          name: "cardQuantity",
          head: "Card qty",
          columnWidth: "5rem",
          digitGrouping: true,
        }, {
          name: "itemName",
          head: "Item name",
          columnWidth: "15rem",
        }, {
          name: "itemQuantity",
          head: "Item qty",
          columnWidth: "5rem",
          digitGrouping: true,
        }]}
      />
    </Content>
  )
}
