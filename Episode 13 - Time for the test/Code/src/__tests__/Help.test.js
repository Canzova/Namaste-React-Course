import { render, screen } from "@testing-library/react";
import Help from "../components/Help";
import "@testing-library/jest-dom/jest-globals";

describe("Checking help page", () => {
  
  // // Helper functions
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  test("Heading of the Help Page should be loaded", () => {
    // Rendering onto js dom
    render(<Help />);

    // Quering
    const heading = screen.getByRole("heading");

    // Asseriton
    expect(heading).toBeInTheDocument();
  });

  test("2 Input boxes should be loaded in Help page", () => {
    // Rendering onto js dom
    render(<Help />);

    // Quering
    const inputBox = screen.getAllByRole("textbox");

    // Asseriton
    expect(inputBox.length).toBe(2);
  });

  test("2 Input boxes should be loaded in Help page", () => {
    // Rendering onto js dom
    render(<Help />);

    // Quering
    const inputBox = screen.getAllByRole("textbox");

    // Asseriton
    expect(inputBox.length).not.toBe(1);
  });

  it("Checking Button is loaded or not by method 1", () => {
    // Rendering onto js dom
    render(<Help />);

    // Quering
    const button = screen.getByRole("button");

    // Asseriton
    expect(button).toBeInTheDocument();
  });

  test("Checking Button is loaded or not by method 2", () => {
    // Rendering onto js dom
    render(<Help />);

    // Quering
    const button = screen.getByText("Submit");

    // Asseriton
    expect(button).toBeInTheDocument();
  });

  it("Checking Jsx", () => {
    // Rendering onto js dom
    render(<Help />);

    // Quering
    const button = screen.getByRole("button");

    // This will give you a virtual dom Rect Element---> Jsx----> Js Object
    // Also node as react fibre node
    //console.log(button);
  });
});
