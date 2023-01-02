import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import Shop from "./Shop";
import Cart from "./Cart";
import whiteTeeIcon from "../images/whitetee.jpg";
import blackTeeIcon from "../images/blacktee.jpg";
import yellowTeeIcon from "../images/yellow.jpeg";
import blackHoodieIcon from "../images/bh.jpeg";
import whiteHoodieIcon from "../images/wh.jpeg";
import blueJeansIcon from "../images/bj.jpeg";
import blackJeansIcon from "../images/blj.jpeg";
import shortsIcon from "../images/is.jpeg";
import whiteShoesIcon from "../images/ws.jpeg";
import blackShoesIcon from "../images/bs.jpeg";
import wristwatchIcon from "../images/ww.jpeg";

export default function RouteSwitch() {
  const [items, setItems] = useState([
    {
      id: 0,
      src: whiteTeeIcon,
      name: "Plain White Tee",
      price: 499,
      count: 0,
    },
    {
      id: 1,
      src: blackTeeIcon,
      name: "Plain Black Tee",
      price: 499,
      count: 0,
    },
    {
      id: 2,
      src: yellowTeeIcon,
      name: "Plain Yellow Tee",
      price: 599,
      count: 0,
    },
    {
      id: 3,
      src: blackHoodieIcon,
      name: "Black Hoodie",
      price: 899,
      count: 0,
    },
    {
      id: 4,
      src: whiteHoodieIcon,
      name: "White Hoodie",
      price: 999,
      count: 0,
    },
    {
      id: 5,
      src: blueJeansIcon,
      name: "Blue Jeans",
      price: 1199,
      count: 0,
    },
    {
      id: 6,
      src: blackJeansIcon,
      name: "Black Jeans",
      price: 1399,
      count: 0,
    },
    {
      id: 7,
      src: shortsIcon,
      name: "Ivory Shorts",
      price: 349,
      count: 0,
    },
    {
      id: 8,
      src: whiteShoesIcon,
      name: "White Leather Shoes",
      price: 2299,
      count: 0,
    },
    {
      id: 9,
      src: blackShoesIcon,
      name: "Black Canvas Shoes",
      price: 1699,
      count: 0,
    },
    {
      id: 10,
      src: wristwatchIcon,
      name: "Analog Watch",
      price: 2999,
      count: 0,
    },
  ]);

  return (
    <BrowserRouter>
      <Nav
        name="Name here"
        count={items.filter((item) => item.count > 0).length}
      />
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
