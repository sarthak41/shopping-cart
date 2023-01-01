import React from "react";

export default function ListItem({ id, name, price, count, items, setItems }) {
  const incCount = () => {
    const newItems = [...items];
    newItems.find((item) => item.id === id).count++;
    setItems(newItems);
  };

  const decCount = () => {
    const newItems = [...items];
    newItems.find((item) => item.id === id).count--;
    setItems(newItems);
  };

  const inputCount = (event) => {
    console.log(parseInt(event.target.value));
    const newItems = [...items];
    // if (event.target.value !== "") {
    newItems.find((item) => item.id === id).count = parseInt(
      event.target.value
    );
    setItems(newItems);
  };

  return (
    <li>
      <div>{name}</div>
      <div>{price}</div>
      <button onClick={decCount}>-</button>
      <input type="number" value={count} onChange={(e) => inputCount(e)} />
      <button onClick={incCount}>+</button>
    </li>
  );
}
