import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//! Importing components
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Offers from "./components/Offers";
import Error from "./components/Error";
import Help from "./components/Help";
import Cart from "./components/Cart";
import RestMenu from "./components/RestMenu";
import { lazy, Suspense } from "react";

// Importing Grocery as a lazy component
const Grocery = lazy(() => {
  return import("./components/Grocery");
});

//const Grocery = lazy(() =>  (import("./components/Grocery"));
// Below code will give an error---> Because if you are using {} curly braces in arrow function then you need to write return also
//const Grocery = lazy(() =>  {import("./components/Grocery")});

const root = ReactDOM.createRoot(document.getElementById("root"));

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// Creating Router configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:restId",
        element: <RestMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>I am Loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
