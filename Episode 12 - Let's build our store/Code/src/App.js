import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

//! Importing components
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Offers from "./components/Offers";
import Error from "./components/Error";
import Help from "./components/Help";
import Cart from "./components/Cart";
import RestMenu from "./components/RestMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
import cartContext from "./utils/cartContext";

const Applayout = () => {
  const [cartData, setCartData] = useState([]);

  return (
    <cartContext.Provider value={{ items: cartData, setCartData }}>
      <Provider store={appStore}>
        <div className="app">
          <Header />
          <Outlet />
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{

              duration: 3000,
              style: {
                background: "#363636",
                color: "#fff",
              },
            }}
          />
        </div>
      </Provider>
    </cartContext.Provider>
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
