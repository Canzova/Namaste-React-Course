import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header component", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
});

it("Should render the login button and change to logout on click", () => {
  // Render the Header component within a Provider and BrowserRouter
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  // Get the login button by its role and name
  const loginBtn = screen.getByRole("button", { name: "Login" });

  // Simulate a click event on the login button
  fireEvent.click(loginBtn);

  // Get the logout button by its role and name
  const logoutBtn = screen.getByRole("button", { name: "Logout" });

  // Assert that the logout button is in the document
  expect(logoutBtn).toBeInTheDocument();
});

it("Should render card with 0 items", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const card = screen.getByRole("link", { name: "Cart - 0" });
  expect(card).toBeInTheDocument();
});

it("Should render card with regex", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const card = screen.getByText(/Cart/);
  expect(card).toBeInTheDocument();
});
