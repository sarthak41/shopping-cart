import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";
import Card from "../components/Card";
import { BrowserRouter } from "react-router-dom";
import whiteTeeIcon from "../images/whitetee.jpg";
import userEvent from "@testing-library/user-event";

describe("Card component", () => {
  it("check if image renders correctly", () => {
    render(
      <Card id={0} src={whiteTeeIcon} name="Plain White Tee" price="500" />
    );
    expect(screen.getByRole("img")).toHaveAttribute("src", "whitetee.jpg");
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Plain White Tee");
  });

  it("check if name and price are rendered correctly", () => {
    render(
      <Card id={0} src={whiteTeeIcon} name="Plain White Tee" price="500" />
    );
    expect(screen.getByText(/plain white tee/i)).toBeInTheDocument();
    expect(screen.getByText(/₹500/i)).toBeInTheDocument();
  });

  it("check add to cart renders when item not added, and +- dont appear", () => {
    render(
      <Card
        id={0}
        src={whiteTeeIcon}
        name="Plain White Tee"
        price="500"
        count={0}
      />
    );
    expect(screen.getByRole("button").textContent).toMatch(/add to cart/i);
    expect(screen.queryByText("-")).not.toBeInTheDocument();
    expect(screen.queryByText("+")).not.toBeInTheDocument();
  });

  it("check incr/decr button appear when item added to cart, and add to cart disappears", () => {
    render(
      <Card
        id={0}
        src={whiteTeeIcon}
        name="Plain White Tee"
        price="500"
        count={2}
      />
    );
    expect(screen.getAllByRole("button")[0].textContent).toMatch("-");
    expect(screen.getAllByRole("button")[1].textContent).toMatch("+");
    expect(screen.queryByText(/add to cart/i)).not.toBeInTheDocument();
  });
});

describe("Card item functionality", () => {
  it("check add to cart buttons works properly", () => {
    const items = [
      {
        id: 0,
        src: whiteTeeIcon,
        name: "Plain White Tee",
        price: 500,
        count: 0,
      },
    ];
    // const setItemsMock = (newCount) => {
    //   items[0].count = newCount;
    // };

    const setItemsMock = jest.fn();

    render(
      <Card
        id={0}
        src={whiteTeeIcon}
        name="Plain White Tee"
        price={500}
        count={0}
        items={items}
        setItems={setItemsMock}
      />
    );
    const addToCartBtn = screen.getByRole("button");
    userEvent.click(addToCartBtn);
    expect(setItemsMock).toHaveBeenCalledTimes(1);
    userEvent.click(addToCartBtn);
    expect(setItemsMock).toHaveBeenCalledTimes(2);

    // const countInput = screen.getByRole("textbox");
    // expect(addToCartBtn).not.toBeInTheDocument();
    // expect(countInput).toBeInTheDocument();
  });
});
