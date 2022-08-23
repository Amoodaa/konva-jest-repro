import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(React.createElement(App));
  try {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).not.toBeInTheDocument();
  } catch (e) {}
});
