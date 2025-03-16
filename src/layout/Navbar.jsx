import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { SiShopee } from "react-icons/si";
import { NavLink } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { TiShoppingCart } from "react-icons/ti";
import { useQuery } from "@tanstack/react-query";

const links = (
  <div className="space-x-5">
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive
          ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
          : "text-gray-700"
      }
    >
      Home
    </NavLink>

    <NavLink
      to="/about"
      className={({ isActive }) =>
        isActive
          ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
          : "text-gray-700"
      }
    >
      About
    </NavLink>

    <NavLink
      to="/contact"
      className={({ isActive }) =>
        isActive
          ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
          : "text-gray-700"
      }
    >
      Contact
    </NavLink>

    <NavLink
      to="/allProducts"
      className={({ isActive }) =>
        isActive
          ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
          : "text-gray-700"
      }
    >
      Our Products
    </NavLink>
  </div>
);

function Navbar() {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const withAxios = useAxios();

  const handleSignOut = () => {
    logOut().then(() => {
      console.log("Successfully Logged Out");
      navigate("/login");
    });
  };

  const { data } = useQuery({
    queryKey: ["cartItems"],
    queryFn: async () => {
      const res = await withAxios.get("cartItems");
      return res?.data;
    },
  });

  return (
    <div>
      <div className="navbar bg-black opacity-80 text-white shadow-sm fixed top-0 left-0 w-full z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="md:btn md:btn-ghost btn-sm text-md md:text-xl">
            <SiShopee />
            FreshNest
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex justify-center items-center gap-3">
              <NavLink
                to="/cartItems"
                className={({ isActive }) =>
                  `flex items-center space-x-1 ${
                    isActive ? "text-red-500 font-bold" : "text-gray-800"
                  }`
                }
              >
                <TiShoppingCart className="text-md md:text-2xl text-white" />
                <div className="font-semibold text-md md:text-xl text-white">
                  {data?.length}
                </div>
              </NavLink>
              <Link onClick={handleSignOut} className="btn btn-xs md:btn-md">
                SignOut
              </Link>
            </div>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
