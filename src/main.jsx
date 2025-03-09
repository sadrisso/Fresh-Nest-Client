import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router/Router";
import React from "react";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
