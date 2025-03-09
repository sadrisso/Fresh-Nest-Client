/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { BiCategory } from "react-icons/bi";

function Home() {
  const withAxios = useAxios();
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = () => {
    withAxios.get("categories").then((res) => {
      setAllCategories(res?.data);
    });
  };

  console.log(allCategories);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section
        className="min-h-[calc(100vh-50px)] flex flex-col items-center justify-center text-center px-6 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/grocery.jpg')" }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to Grocery Mart
        </h1>
        <p className="text-sm md:text-lg mb-6">
          Fresh, organic, and quality groceries delivered to your doorstep.
        </p>
        <Link to="/allProducts">
          <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Shop Now
          </button>
        </Link>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-6 text-center bg-[#E8EDEB] rounded-lg shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allCategories.map((product, i) => (
            <Link
              key={i}
              to={`/product/${product?.category}`}
              className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-blue-50"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex justify-center items-center space-x-2">
                <span>{product?.category}</span>
                <BiCategory className="text-blue-500" />
              </h3>
              <p className="text-gray-600">Choose your favourite category</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section className="bg-gray-200 py-20 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Popular Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md transition transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">🍞 Whole Wheat Bread</h3>
            <p>Freshly baked every day.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transition transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">🥩 Organic Meat</h3>
            <p>High-quality and hormone-free meat.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transition transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">🍯 Natural Honey</h3>
            <p>Raw and unprocessed honey.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 text-center">
        <h2 className=" text-2xl md:text-3xl font-bold mb-10">
          What Our Customers Say
        </h2>
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <p className="italic">
            "Grocery Mart has made my life so much easier! Fresh products and
            fast delivery."
          </p>
          <h3 className="mt-4 font-semibold">- Emily Smith</h3>
        </div>
      </section>
    </div>
  );
}

export default Home;
