import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router/Router";
import React from "react";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
