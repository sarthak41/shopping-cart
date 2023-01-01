import React from "react";
import ListItem from "./ListItem";

export default function Cart({ items, boughtItems, setItems }) {
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

    return <ul>{itemList}</ul>;
  };

  return <div className="main-div">{displayItems()}</div>;
}
