/* eslint-disable no-unused-vars */

/* eslint-disable react-hooks/exhaustive-deps */
// @flow strict

import React, { useState } from "react";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

function AllProducts() {
  const withAxios = useAxios();
  const [isLoading, setIsLoading] = useState(true);

  const { data: productData } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await withAxios.get("products");
      setIsLoading(false);
      return res?.data;
    },
  });

  const { data: cartData, refetch: cartRefetch } = useQuery({
    queryKey: ["cartItems"],
    queryFn: async () => {
      const res = await withAxios.get("cartItems");
      return res?.data;
    },
  });

  const handleAddToCart = (id) => {
    console.log("Add to cart Id: ", id);

    withAxios.get(`item/${id}`).then((res) => {
      const { category, image, name, price } = res?.data || {};
      const cartProduct = { category, image, name, price };

      withAxios.post("cartItem", cartProduct).then((res) => {
        console.log(res?.data);
        if (res?.data?.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          cartRefetch();
        }
      });
    });
  };

  const handleSearch = (e) => {
    console.log(e.target.value)
  }

  const handleSort = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between p-5 bg-gray-100 rounded-lg mt-16 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          onChange={handleSearch}
          className="px-4 py-2 border rounded-md w-full md:w-1/2"
        />

        <select
          className="px-4 py-2 border rounded-md"
          onChange={handleSort}
        >
          <option value="default">Sort By</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="stock">Stock Availability</option>
        </select>
      </div>

      {isLoading ? (
        <div className="mt-16 text-center">
          <p>Please Wait...</p>
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
          {productData?.map((product, i) => (
            <div key={i}>
              <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={product?.image || "https://via.placeholder.com/150"}
                    alt={product?.name}
                    className="w-full h-56 object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product?.category || "Category"}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product?.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {product?.description || "No description available."}
                  </p>

                  <div className="flex justify-between items-center mt-3">
                    <p className="text-lg font-bold text-blue-600">
                      ${product?.price || "N/A"}
                    </p>
                    <span
                      className={`text-sm font-medium px-2 py-1 rounded-full ${
                        product?.stock > 0
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product?.stock > 0
                        ? `In Stock (${product?.stock})`
                        : "Out of Stock"}
                    </span>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <Link to={`/productDetails/${product?.id}`} className="w-full">
                      <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 rounded-lg transition">
                        Details
                      </button>
                    </Link>
                    <button
                      onClick={() => handleAddToCart(product?.id)}
                      className={`w-full py-2 rounded-lg text-white transition ${
                        product?.stock > 0
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-gray-400 cursor-not-allowed"
                      }`}
                      disabled={product?.stock <= 0}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default AllProducts;
