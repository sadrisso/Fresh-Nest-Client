/* eslint-disable react-hooks/exhaustive-deps */
// @flow strict

import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";

function CartProducts() {
  const withAxios = useAxios();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    getCartData();
  }, []);

  const getCartData = () => {
    withAxios.get("cartItems").then((res) => {
      console.log(res?.data);
      setCartData(res?.data);
    });
  };

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        withAxios.delete(`cartItem/${id}`).then((res) => {
          console.log(res?.data);
          if (res?.data?.deletedCount > 0) {
            setCartData(cartData.filter((item) => item._id !== id));
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cartData.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cartData.map((item) => (
            <div
              key={item._id}
              className="border p-4 rounded-lg shadow-md flex items-center gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-700">${item.price}</p>
              </div>
              <button
                onClick={() => handleRemove(item._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartProducts;
