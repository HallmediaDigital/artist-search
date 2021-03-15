import React from "react";
import { findByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders app", () => {
  render(<App />);
  const artistSearch = screen.getByPlaceholderText("Artist search");

  expect(artistSearch).toBeInTheDocument();
});
