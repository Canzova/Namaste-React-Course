import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../Mock Data/Body_Content_data.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

/**
 * ! Fetch function is give to us by Browser, and here are not rendering our comonents on Browser
 * ? We are rendering our body component on jsDom which is browser like, not actual browser, it doest have fetch into it
 * Todo : There for we are facking a fetch dunction, we are creating a dummy fetch function
 *
 * ! global.fetch : It will find the fetch function globally and replace it with given function
 * ! jest.fn() --- > It will baiscally create a function
 */

global.fetch = jest.fn(() => {
  // fetch function returns a promise
  return Promise.resolve({
    // We convert that promise into json using .json() function which again returns a promise
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the serach button", async () => {
  /**
   * ! act function is used for state update---> act returns a peomise that why we have written async on top function and also inside the act function
   */
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  // Querying
  const searchBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  // Assertion
  expect(searchBtn).toBeInTheDocument();
});

it("Should load 2 card on search on biryani", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  // chage event is similar to onChange event, like we use onChange event in react to get the data when someone types something into the inpout box

  // ! Similarly we use change here in test to write something manually in inout box
  //? In browser we have feature/superpower of event.target.value, which our js dom does not have
  // Todo : so when we write { target: { value: "biryani" } } we are doing event.target.value = biryani, basically we are writing biryani into our search box
  fireEvent.change(searchInput, { target: { value: "biryani" } });

  // After wrting into serch box we are clicking searchBtn
  fireEvent.click(searchBtn);

  // Counting number of cards on screen after click
  const cards = screen.getAllByTestId("RestList");

  expect(cards.length).toBe(2);
});

it("Should load 8 cards if user clicks on Top Restaurants button", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  // Querying
  const topRestaurantsBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRestaurantsBtn);

  // Counting number of cards on screen after click
  const cards = screen.getAllByTestId("RestList");

  // Assertion
  expect(cards.length).toBe(8);
});
