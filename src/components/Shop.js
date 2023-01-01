import React from "react";
import Card from "./Card";
import "../styles/shop.css";

export default function Shop({ items, setItems }) {
  const displayItems = () => {
    const itemCards = items.map((card) => (
      <li key={card.id}>
        <Card
          id={card.id}
          src={card.src}
          name={card.name}
          price={card.price}
          count={card.count}
          items={items}
          setItems={setItems}
        />
      </li>
    ));
    return (
      <div className="items">
        <ul>{itemCards}</ul>
      </div>
    );
  };

  return <div className="main-div">{displayItems()}</div>;
}
