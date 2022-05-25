import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Monsters from "./pages/Monsters/Monsters";
import Monster from "./pages/Monster/Monster";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Monsters />} />
        <Route path="/detail/" element={<Monster />} />
      </Routes>
    </BrowserRouter>
  );
}
