import { render, screen } from "@testing-library/react";
import RestCard from "../components/RestCard";
import "@testing-library/jest-dom";
import data from "../Mock Data/RESTCARD_MOCK_DATA";

it("Should load the restaurant card prop data", () => {
  // Step 1 : DO rendering on jsDOM
  render(<RestCard restInfo={data} />);

  // Step 2 : Querying
  const name = screen.getByText("Domino's Pizza");

  // Step 3 : Assertion
  expect(name).toBeInTheDocument();
});
