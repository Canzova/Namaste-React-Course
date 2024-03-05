import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useSearchParams,
} from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import UserContext from "./utils/UserContext";

//! Importing components
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Offers from "./components/Offers";
import Error from "./components/Error";
import Help from "./components/Help";
import Cart from "./components/Cart";
import RestMenu from "./components/RestMenu";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Applayout = () => {
  //const {userName} = useContext(UserContext);

  const [updatedUserName, setupdatedUserName] = useState();
  useEffect(() => {
    const data = {
      userName: "Kevin Peterson",
    };
    setupdatedUserName(data?.userName);
  }, []);
  return (
    // with below code we are updating the whole usercontext object
    <UserContext.Provider>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
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
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
