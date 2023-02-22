import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routing
import { ErrorRoute } from "./routes/error";
import { RootRoute } from "./routes/root";
import { HomeRoute, loader as homeLoader } from "./routes/home";
import { CartRoute, loader as cartLoader } from "./routes/cart";
import Chicken from "./pages/Chicken";
import Drink from "./pages/Drink";
import Porridge from "./pages/Porridge";
import RecomendationMenu from "./pages/RecomendationMenu";
import Seafood from "./pages/Seafood";
import Soup from "./pages/Soup";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
        loader: homeLoader,
      },
      {
        path: "/chickenmenu",
        element: <Chicken />,
      },
      {
        path: "/drinkmenu",
        element: <Drink />,
      },
      {
        path: "/porridgemenu",
        element: <Porridge />,
      },
      {
        path: "/recomendationmenu",
        element: <RecomendationMenu />,
      },
      {
        path: "/seafoodmenu",
        element: <Seafood />,
      },
      {
        path: "/soupmenu",
        element: <Soup />,
      },
    ],
  },
  {
    path: "/cart",
    element: <CartRoute />,
    loader: cartLoader,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
