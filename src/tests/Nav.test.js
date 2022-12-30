import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";
import Nav from "../components/Nav";
import { BrowserRouter } from "react-router-dom";
import cartIcon from "../images/cart.svg";

describe("Nav component", () => {
  it("renders home and shop", () => {
    render(<Nav name="Name here" />, { wrapper: BrowserRouter });
    expect(screen.getByText("FashionZone")).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();
    expect(screen.getByText("Name here")).toBeInTheDocument();
  });

  it("renders 4 list items", () => {
    render(<Nav name="Name here" />, { wrapper: BrowserRouter });
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
  });

  it("renders list items home, shop, name", () => {
    render(<Nav name="Name here" />, { wrapper: BrowserRouter });
    expect(screen.getAllByRole("listitem")[0].textContent).toMatch(
      /FashionZone/i
    );
    expect(screen.getAllByRole("listitem")[1].textContent).toMatch(/shop/i);
    expect(screen.getAllByRole("listitem")[2].textContent).toMatch(
      /name here/i
    );
  });

  it("renders cart icon correctly", () => {
    render(<Nav name="Name here" />, { wrapper: BrowserRouter });
    expect(screen.getByRole("img")).toHaveAttribute("src", "cart.svg");
    expect(screen.getByRole("img")).toHaveAttribute("alt", "cart");
  });

  it("snapshot test", () => {
    render(<Nav />, { wrapper: BrowserRouter });
    expect(screen).toMatchSnapshot();
  });
});
