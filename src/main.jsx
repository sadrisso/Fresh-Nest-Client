import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router/Router";
import React from "react";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
