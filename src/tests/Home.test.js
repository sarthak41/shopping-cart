import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";
import Home from "../components/Home";
import { BrowserRouter } from "react-router-dom";

describe("Home component", () => {
  it("renders correctly", () => {
    render(<Home />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("renders heading and subtext correctly", () => {
    render(<Home />);
    expect(screen.getByRole("heading").textContent).toMatch(/set the trend/i);
    expect(
      screen.getByText(/get the best bang for your buck at fashionzone/i)
    ).toBeInTheDocument();
  });
});
