import { render, screen } from "@testing-library/react";
import RestCard from "../components/RestCard";
import "@testing-library/jest-dom";
import data from "../Mock Data/RESTCARD_MOCK_DATA";
import { RestCardWithLabel } from "../components/RestCard";
import vegData from "../Mock Data/RestCardWithLabe.json";

it("Should load the restaurant card prop data", () => {
  // Step 1 : DO rendering on jsDOM

  /**
   *! So the RestCard Component takes a prop, to use a component in testing which uses a prop we need to send a mock data as a prop to that component to test it
   */
  render(<RestCard restInfo={data} />);

  // Step 2 : Querying
  const name = screen.getByText("Domino's Pizza");

  // Step 3 : Assertion
  expect(name).toBeInTheDocument();
});

// Testing Highr order function
it("Should render the Higher order component --> RestCardWithLabel", () => {
  const RestCardVeg = RestCardWithLabel(RestCard);
  render(<RestCardVeg restInfo={vegData} />);

  const veg = screen.getByText("PURE VEG");

  expect(veg).toBeInTheDocument();
});
