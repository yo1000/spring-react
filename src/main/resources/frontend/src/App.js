import React from "react";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Weapons from "./pages/Weapons";
import {Route, Routes} from "react-router-dom";
import Cards from "./pages/Cards";
import Empty from "./pages/Empty";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="flex flex-col">
      <div>
        <Header/>
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/items" element={<Items/>} />
          <Route path="/weapons" element={<Weapons/>} />
          <Route path="/cards" element={<Cards/>} />
          <Route path="/empty" element={<Empty/>} />
        </Routes>
      </div>
    </div>
  )
}
