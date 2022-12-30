import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";
import cartIcon from "../images/cart.svg";

export default function Nav({ name }) {
  return (
    <nav>
      <ul>
        <div className="flex">
          <li>
            <Link to="/">
              <h1>FashionZone</h1>
            </Link>
          </li>
        </div>
        <div className="flex">
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>{name}</li>
          <li>
            <button>
              <Link to="/cart">
                <img src={cartIcon} alt="cart"></img>
              </Link>
            </button>
          </li>
        </div>
      </ul>
    </nav>
  );
}
