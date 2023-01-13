import React from "react";
import {render, screen} from "@testing-library/react";
import Sample from "./Sample";

test("renders the sample component", () => {
  render(<Sample name="ciao" />);
  expect(screen.getByRole("heading")).toHaveTextContent(/Doggy Directory/);
  //expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
  expect(screen.getByRole("button", {name: "Search"})).toBeDisabled();
  //expect(screen.getByRole("img")).toBeInTheDocument();
});
