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
    <li
      key={id}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
        backgroundColor: "rgb(230, 230, 230)",
        padding: "10px 20px",
        // boxShadow: "0 10px 5px -3px rgba(0, 0, 0, 0.4)",
      }}
    >
      <div>{name}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <div>₹{price}</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            onClick={decCount}
            style={{ height: "30px", display: "flex", alignItems: "center" }}
            className="minus inc-dec"
          >
            -
          </button>
          <input
            type="number"
            value={count}
            onChange={(e) => inputCount(e)}
            style={{ width: "40px", height: "30px", textAlign: "center" }}
          />
          <button
            onClick={incCount}
            style={{ height: "30px", display: "flex", alignItems: "center" }}
            className="plus inc-dec"
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
}
