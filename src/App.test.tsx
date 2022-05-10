import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("First Header is in document", () => {
  render(<App />);
  const firstHeaderElement = screen.getByTestId("firstHeader");
  expect(firstHeaderElement).toBeInTheDocument();
});
