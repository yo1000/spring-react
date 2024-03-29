import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Items from "./pages/database/Items";
import Weapons from "./pages/database/Weapons";
import Cards from "./pages/database/Cards";
import DataTableDemo from "./pages/showcase/DataTableDemo";
import Header from "./components/Header";
import {
  BeakerIcon,
  CircleStackIcon, PrinterIcon,
  PuzzlePieceIcon,
  SparklesIcon,
  Square2StackIcon,
  WrenchScrewdriverIcon
} from "@heroicons/react/20/solid";
import ComboBoxDemo from "./pages/showcase/ComboBoxDemo";
import LayoutDemo from "./pages/showcase/LayoutDemo";
import InputDemo from "./pages/showcase/InputDemo";
import NotificationDemo from "./pages/showcase/NotificationDemo";
import ButtonDemo from "./pages/showcase/ButtonDemo";
import PanelDemo from "./pages/showcase/PanelDemo";
import TextDemo from "./pages/showcase/TextDemo";
import PaginatorDemo from "./pages/showcase/PaginatorDemo";

export default function App() {
  const reportBaseUri = process.env.REPORT_BASE_URI || ""

  /** @type PrimaryCategory[] */
  const primaryCategories = [{
    name: "Database",
    icon: CircleStackIcon,
    secondaryCategories: [{
      name: "Items",
      icon: BeakerIcon,
      items: [{
        name: "all",
        href: "/items",
        authority: "/api/items",
      }]
    }, {
      name: "Weapons",
      icon: WrenchScrewdriverIcon,
      items: [{
        name: "all",
        href: "/weapons",
        authority: "/api/weapons",
      }]
    }, {
      name: "Spells",
      icon: SparklesIcon,
      items: [{
        name: "-",
        href: null,
        authority: null,
      }]
    }, {
      name: "Cards",
      icon: Square2StackIcon,
      items: [{
        name: "all",
        href: "/cards",
        authority: "/api/cards",
      }]
    }]
  }, {
    name: "Showcase",
    icon: PuzzlePieceIcon,
    secondaryCategories: [{
      name: "Demo",
      icon: null,
      items: [{
        name: "Layout",
        href: "/showcase/layout",
        authority: null,
      }, {
        name: "Panel",
        href: "/showcase/panel",
        authority: null,
      }, {
        name: "Button",
        href: "/showcase/button",
        authority: null,
      }, {
        name: "Text",
        href: "/showcase/text",
        authority: null,
      }, {
        name: "Input",
        href: "/showcase/input",
        authority: null,
      }, {
        name: "ComboBox",
        href: "/showcase/comboBox",
        authority: null,
      }, {
        name: "DataTable",
        href: "/showcase/dataTable",
        authority: null,
      }, {
        name: "Paginator",
        href: "/showcase/paginator",
        authority: null,
      }]
    }, {
      items: [{
        name: "Notification",
        href: "/showcase/notification",
        authority: null,
      }]
    }]
  }, {
    name: "Reporting",
    icon: PrinterIcon,
    secondaryCategories: [{
      name: "Demo",
      icon: null,
      items: [{
        name: "Junction Menu PDF",
        href: `${reportBaseUri}/report/junctionMenuReport.pdf`,
        target: "_blank",
      }]
    }]
  }]

  return (
    <div className="flex flex-col">
      <div>
        <Header primaryCategories={primaryCategories}/>
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/items" element={<Items/>} />
          <Route path="/weapons" element={<Weapons/>} />
          <Route path="/cards" element={<Cards/>} />

          <Route path="/showcase/layout" element={<LayoutDemo/>} />
          <Route path="/showcase/panel" element={<PanelDemo/>} />
          <Route path="/showcase/button" element={<ButtonDemo/>} />
          <Route path="/showcase/text" element={<TextDemo/>} />
          <Route path="/showcase/input" element={<InputDemo/>} />
          <Route path="/showcase/comboBox" element={<ComboBoxDemo/>} />
          <Route path="/showcase/dataTable" element={<DataTableDemo/>} />
          <Route path="/showcase/paginator" element={<PaginatorDemo/>} />
          <Route path="/showcase/notification" element={<NotificationDemo/>} />
        </Routes>
      </div>
    </div>
  )
}
