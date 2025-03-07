/* eslint-disable no-unused-vars */
// @flow strict

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

function Category() {
  const { category } = useParams();
  const [item, setItem] = useState([]);
  const withAxios = useAxios();

  useEffect(() => {
    getCategoryData();
  }, []);

  const getCategoryData = () => {
    withAxios
      .get(`product/${category}`)
      .then((res) => {
        console.log(res?.data);
        setItem(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {item?.map((i, idx) =>
        i?.products?.map((product, index) => (
          <div key={`${idx}-${index}`} className="shadow-lg border rounded-2xl overflow-hidden">
            <img
              src={product?.image || "https://via.placeholder.com/150"}
              alt={product?.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{product?.name}</h3>
              <p className="text-sm text-gray-500">{product?.description || "No description available."}</p>
              <p className="text-md font-bold text-blue-600 mt-2">${product?.price || "N/A"}</p>
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white">
                Add to Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Category;
