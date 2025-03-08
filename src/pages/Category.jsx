/* eslint-disable no-unused-vars */
// @flow strict

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

function Category() {
  const { category } = useParams();
  const [item, setItem] = useState([]);
  const withAxios = useAxios();

  useEffect(() => {
    getCategoryData();
  }, [category]);

  const getCategoryData = () => {
    withAxios
      .get(`product/${category}`)
      .then((res) => {
        console.log("API Response:", res?.data);
        setItem(res?.data || []);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="p-6">
      {/* Title Section */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
        🛒 Our Fresh Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {item?.map((i, idx) => (
          <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <img
                src={i?.image || "https://via.placeholder.com/150"}
                alt={i?.name}
                className="w-full h-56 object-cover"
              />
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {i?.category || "Category"}
              </span>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {i?.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {i?.description || "No description available."}
              </p>

              <div className="flex justify-between items-center mt-3">
                <p className="text-lg font-bold text-blue-600">
                  ${i?.price || "N/A"}
                </p>
                <span
                  className={`text-sm font-medium px-2 py-1 rounded-full ${
                    i?.stock > 0
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {i?.stock > 0
                    ? `In Stock (${i?.stock})`
                    : "Out of Stock"}
                </span>
              </div>

              <div className="mt-4 flex gap-2">
                <Link to={`/productDetails/${i?.id}`} className="w-full">
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 rounded-lg transition">
                    Details
                  </button>
                </Link>
                <button
                  className={`w-full py-2 rounded-lg text-white transition ${
                    i?.stock > 0
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  disabled={i?.stock <= 0}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
