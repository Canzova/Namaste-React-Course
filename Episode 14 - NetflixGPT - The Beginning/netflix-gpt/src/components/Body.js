import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import MoreInfo from "./MoreInfo";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/moreinfo/:movieid",
      element : <MoreInfo/>
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
