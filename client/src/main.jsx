import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Cheese from "./Pages/Cheese.jsx";
// import CreateCheese from "./Pages/CreateCheese.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cheese />,
  },
  /*Route for a CreateCheese Page*/
  // {
  //   path: "/create",
  //   element: <CreateCheese />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
