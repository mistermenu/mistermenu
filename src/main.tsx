import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routing
import { ErrorRoute } from "./routes/error";
import { RootRoute } from "./routes/root";
import { HomeRoute, loader as homeLoader } from "./routes/home";
import { CartRoute, loader as cartLoader } from "./routes/cart";

import { ChickenRoute } from "./routes/chicken";
import { DrinkRoute, loader as drinkLoader } from "./routes/drink";
import { PorridgeRoute } from "./routes/porridge";
import {
  RecomendationRoute,
  loader as recomendationLoader,
} from "./routes/recommendation";
import { SeafoodRoute } from "./routes/seafood";
import { SoupRoute } from "./routes/soup";

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
        path: "/chicken",
        element: <ChickenRoute />,
      },
      {
        path: "/drink",
        element: <DrinkRoute />,
        loader: drinkLoader,
      },
      {
        path: "/porridge",
        element: <PorridgeRoute />,
      },
      {
        path: "/recomendation",
        element: <RecomendationRoute />,
        loader: recomendationLoader,
      },
      {
        path: "/seafood",
        element: <SeafoodRoute />,
      },
      {
        path: "/soup",
        element: <SoupRoute />,
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
