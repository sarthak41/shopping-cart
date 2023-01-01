import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import Shop from "./Shop";
import Cart from "./Cart";
import whiteTeeIcon from "../images/whitetee.jpg";
import blackTeeIcon from "../images/blacktee.jpg";

export default function RouteSwitch() {
  const [items, setItems] = useState([
    {
      id: 0,
      src: whiteTeeIcon,
      name: "Plain White Tee",
      price: 500,
      count: 0,
    },
    {
      id: 1,
      src: blackTeeIcon,
      name: "Plain Black Tee",
      price: 500,
      count: 0,
    },
  ]);

  return (
    <BrowserRouter>
      <Nav name="Name here" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop items={items} setItems={setItems} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              items={items}
              boughtItems={items.filter((item) => item.count > 0)}
              setItems={setItems}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
