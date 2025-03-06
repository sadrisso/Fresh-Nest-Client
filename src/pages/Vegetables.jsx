/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

const Vegetables = () => {
  const [vegetables, setVegetables] = useState([]);
  const withAxios = useAxios();

  useEffect(() => {
    withAxios.get("products?category=Vegetables").then((res) => {
      console.log(res?.data);
      setVegetables(res?.data)
    });
  }, []);

  console.log(vegetables)

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
        Fresh Vegetables
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {vegetables.length > 0 ? (
          vegetables.map((item) => (
            <div
              key={item._id}
              className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-green-600 font-bold text-lg">${item.price}</p>
              <p className="text-gray-600">Stock: {item.stock}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No vegetables available.
          </p>
        )}
      </div>
    </div>
  );
};

export default Vegetables;
