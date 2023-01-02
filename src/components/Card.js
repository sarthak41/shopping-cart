import React from "react";
import "../styles/card.css";

export default function Card({ id, src, name, price, count, items, setItems }) {
  const addToCart = () => {
    const newItems = [...items];
    newItems[id].count = 1;
    setItems(newItems);
  };

  const incCount = () => {
    const newItems = [...items];
    newItems[id].count++;
    setItems(newItems);
  };

  const decCount = () => {
    const newItems = [...items];
    newItems[id].count--;
    setItems(newItems);
  };

  const inputCount = (event) => {
    console.log(parseInt(event.target.value));
    const newItems = [...items];
    // if (event.target.value !== "") {
    newItems[id].count = parseInt(event.target.value);
    setItems(newItems);
  };

  return (
    <div className="card">
      <img src={src} alt={name} />
      <div className="flex padding">
        <div>{name}</div>
        <div className="lighter">₹{price}</div>
      </div>
      <div className="center">
        {count > 0 ? (
          <>
            <button onClick={decCount} className="inc-dec minus">
              -
            </button>
            <input
              type="number"
              value={count}
              onChange={(e) => inputCount(e)}
            />
            <button onClick={incCount} className="inc-dec plus">
              +
            </button>
          </>
        ) : (
          <button onClick={addToCart} className="rounded">
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}
