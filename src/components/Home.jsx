/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { BiCategory } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const withAxios = useAxios();
  const [isLoading, setIsLoading] = useState(true);

  const { data: allCategories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await withAxios.get("categories");
      setIsLoading(false);
      return res?.data;
    },
  });

  console.log("All Category Data: ", allCategories);

  return (
    <div className="min-h-screen">
      {/* Featured Categories */}
      {isLoading ? (
        <div className="mt-16 text-center"><p>Please Wait...</p> <span className="loading loading-spinner loading-xl"></span></div>
      ) : (
        <section className="relative w-full py-16 px-4 sm:px-6 md:py-24 bg-[#F5F5F5] rounded-lg shadow-lg">
          <div className="relative z-10 text-center">
            <h2 className="text-2xl md:text-4xl font-semibold mb-8 sm:mb-12 uppercase tracking-wide">
              🛒 Shop by Category
            </h2>
            <p className="text-lg sm:text-xl max-w-xl mx-auto mb-8 font-medium text-gray-600">
              Discover a variety of categories tailored just for you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {allCategories?.map((product, i) => (
                <Link
                  key={i}
                  to={`/product/${product?.category}`}
                  className="bg-white p-6 text-gray-800 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl border-l-4 border-red-500"
                >
                  <h3 className="text-2xl font-semibold mb-4 flex justify-center items-center space-x-2">
                    <span>{product?.category}</span>
                    <BiCategory className="text-red-500" />
                  </h3>
                  <img
                    src={product?.image}
                    className="w-[300px] h-[200px] rounded-md opacity-90 hover:opacity-100 mx-auto"
                    alt=""
                  />
                  <p className="text-gray-400 text-base">
                    Choose your favourite category
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-10 sm:mt-12">
              <Link to="/allProducts">
                <button className="bg-[#1F2937] text-white px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition shadow-lg">
                  🛍️ Shop Now
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Popular Products */}
      <section className="bg-gradient-to-r from-red-500 to-yellow-400 py-20 px-6 text-center text-white">
        <h2 className="text-4xl font-extrabold mb-10 tracking-wide">
          🔥 Popular Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Whole Wheat Bread", "Organic Meat", "Natural Honey"].map(
            (item, i) => (
              <div
                key={i}
                className="bg-white text-gray-800 p-6 rounded-xl shadow-md transition transform hover:scale-105 hover:shadow-2xl border-t-4 border-yellow-500"
              >
                <h3 className="text-2xl font-bold mb-2">{item}</h3>
                <p className="text-gray-600">Premium quality and fresh.</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-r from-red-500 to-yellow-400 py-20 px-6 text-center text-white">
        <h2 className="text-4xl font-extrabold mb-10 tracking-wide">
          💬 What Our Customers Say
        </h2>
        <div className="max-w-2xl mx-auto bg-white text-gray-900 p-8 rounded-xl shadow-2xl border-b-4 border-red-500">
          <p className="italic text-lg">
            "Grocery Mart has made my life so much easier! Fresh products and
            fast delivery."
          </p>
          <h3 className="mt-6 text-xl font-bold">- Emily Smith</h3>
        </div>
      </section>
    </div>
  );
}

export default Home;
