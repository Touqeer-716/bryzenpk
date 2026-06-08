import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Global Framework Styling

import "./index.css";

// Importing your existing files
import App from "./App.jsx";
//import Products from "./products.jsx";
import LuxuryCarousel from "./assets/components/LuxuryCarousel.jsx";
import Products from "./assets/components/Products2.jsx";
import Test from "./assets/components/Test.jsx";
// 🗺️ Create the route layout map
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App acts as the structural shell (Header + Footer)
    children: [
      {
        index: true, // This loads at the root address "/"
        element: <LuxuryCarousel />,
      },
      {
        path: "shop", // This loads your products layout at "/shop"
        element: <LuxuryCarousel />,
        element: <Products />,
      },
      {
        path: "shirts", // This loads your products layout at "/shop"
        element: <Test />,
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
