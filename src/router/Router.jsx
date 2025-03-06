import { createBrowserRouter } from "react-router-dom";
import React from "react";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Vegetables from "../pages/Vegetables";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/vegetables",
        element: <Vegetables />,
      },
    ],
  },
]);
