// @flow strict

import * as React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
