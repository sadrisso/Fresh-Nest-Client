/* eslint-disable no-unused-vars */
// @flow strict

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

function Category() {
  const { category } = useParams();
  const withAxios = useAxios();
  const [isLoading, setIsLoading] = useState(true);

  const { data: item } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await withAxios.get(`product/${category}`);
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
      const { category, image, name, price, quantity } = res?.data || {};
      const cartProduct = { category, image, name, price, quantity };

      withAxios.post("cartItem", cartProduct).then((res) => {
        console.log(res?.data);
        if (res?.data?.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Added to the cart",
            showConfirmButton: false,
            timer: 1500,
          });
          cartRefetch();
        }
      });
    });
  };

  return (
    <>
      {isLoading ? (
        <div className="mt-16 text-center"><p>Please Wait...</p> <span className="loading loading-spinner loading-xl"></span></div>
      ) : (
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 mt-16">
          {/* Title Section */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            🛍️ Explore Fresh <span className="text-blue-600">{category}</span>
          </h2>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {item?.length > 0 ? (
              item?.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  {/* Image Section */}
                  <div className="relative">
                    <img
                      src={item?.image || "https://via.placeholder.com/150"}
                      alt={item?.name}
                      className="w-full h-52 sm:h-60 object-cover rounded-t-xl"
                    />
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {item?.category || "Category"}
                    </span>
                  </div>

                  {/* Details Section */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item?.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {item?.description || "No description available."}
                    </p>

                    {/* Price & Stock */}
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-lg sm:text-xl font-bold text-blue-600">
                        ${item?.price || "N/A"}
                      </p>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          item?.stock > 0
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item?.stock > 0
                          ? `In Stock (${item?.stock})`
                          : "Out of Stock"}
                      </span>
                    </div>

                    {/* Buttons */}
                    <div className="mt-4 flex flex-col sm:flex-row gap-2">
                      <Link
                        to={`/productDetails/${item?.id}`}
                        className="w-full"
                      >
                        <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 rounded-lg transition">
                          View Details
                        </button>
                      </Link>
                      <button
                        onClick={() => handleAddToCart(item?.id)}
                        className={`w-full py-2 rounded-lg text-white transition ${
                          item?.stock > 0
                            ? "bg-blue-600 hover:bg-blue-700"
                            : "bg-gray-400 cursor-not-allowed"
                        }`}
                        disabled={item?.stock <= 0}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 text-lg col-span-full">
                No items available in this category.
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Category;
