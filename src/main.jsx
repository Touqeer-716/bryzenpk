import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Global Framework Styling
import "./index.css";

import App from "./App.jsx";
import LuxuryCarousel from "./assets/components/LuxuryCarousel.jsx";
import Products from "./assets/components/Products.jsx";
import CartView from "./assets/components/CartView.jsx";
import AddProduct from "./assets/components/AddProduct.jsx";
import Checkout from "./assets/components/Checkout.jsx";

// 🗺️ Create the route layout map
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App acts as the structural shell (Header + Footer)
    children: [
      {
        index: true, // This loads at the root address "/"
        element: (
          <>
            <LuxuryCarousel />,
            <Products />
          </>
        ),
      },
      {
        path: "shop", // This loads your products layout at "/shop"
        element: (
          <>
            <LuxuryCarousel />,
            <Products />
          </>
        ),
      },
      {
        path: "cart", // This loads your products layout at "/shop"
        element: <CartView />,
      },
      {
        path: "checkout", // This loads your products layout at "/shop"
        element: <Checkout />,
      },
      {
        path: "add", // This loads your products layout at "/shop"
        element: <AddProduct />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Injecting our router system */}
    <RouterProvider router={router} />
  </React.StrictMode>,
);
