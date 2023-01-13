import React from "react";
import {render, screen} from "@testing-library/react";
import renderer from "react-test-renderer";

import Button from "./Button";

test("render active button", () => {
  const button = <Button label="button" />;
  //snapshot test
  const tree = renderer.create(button).toJSON();
  expect(tree).toMatchSnapshot();
  //component test
  render(button);
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("render disabled button", () => {
  const button = <Button label="disabled button" disabled={true} />;
  //snapshot test
  const tree = renderer.create(button).toJSON();
  expect(tree).toMatchSnapshot();
  //component test
  render(button);
  expect(screen.getByRole("button")).toBeDisabled();
});
