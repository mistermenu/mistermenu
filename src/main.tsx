import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routing
import { ErrorRoute } from "./routes/error";
import { RootRoute } from "./routes/root";
import { HomeRoute, loader as homeLoader } from "./routes/home";
import { CartRoute, loader as cartLoader } from "./routes/cart";

import { RecomendationRoute } from "./routes/recommendation";
import { ChickenRoute } from "./routes/chicken";
import Drink from "./pages/Drink";
import Porridge from "./pages/Porridge";
import Seafood from "./pages/Seafood";
import Soup from "./pages/Soup";

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
        path: "/recomendation",
        element: <RecomendationRoute />,
      },
      {
        path: "/chicken",
        element: <ChickenRoute />,
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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
