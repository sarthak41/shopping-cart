import React from "react";
import ListItem from "./ListItem";
import "../styles/cart.css";
import { Link } from "react-router-dom";

export default function Cart({ items, boughtItems, setItems }) {
  const totalPrice = () => {
    return boughtItems.reduce(
      (total, curr) => curr.count * curr.price + total,
      0
    );
  };

  const displayItems = () => {
    const itemList = boughtItems.map((boughtItem) => (
      <ListItem
        id={boughtItem.id}
        name={boughtItem.name}
        price={boughtItem.price}
        count={boughtItem.count}
        items={items}
        setItems={setItems}
      />
    ));

    return itemList.length > 0 ? (
      <div className="cart">
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "start",
            // alignItems: "center",
            padding: 0,
            gap: "10px",
          }}
        >
          {itemList}
        </ul>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div>Total Price: ₹{totalPrice()}</div>
          <button className="rounded">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Checkout
            </a>
          </button>
        </div>
      </div>
    ) : (
      <div className="cart">
        <h3>Your cart is empty</h3>
        <h4>Add something to see it here</h4>
        <button>
          <Link to="/shop">Shop</Link>
        </button>
      </div>
    );
  };

  return <div className="main-div">{displayItems()}</div>;
}
