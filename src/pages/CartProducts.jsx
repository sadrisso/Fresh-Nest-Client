// @flow strict

import React, { useState } from "react";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

function CartProducts() {
  const withAxios = useAxios();
  const [isLoading, setIsLoading] = useState(true);

  const { data, refetch } = useQuery({
    queryKey: ["cartItems"],
    queryFn: async () => {
      const res = await withAxios.get("cartItems");
      setIsLoading(false);
      return res?.data;
    },
  });

  console.log("cart data", data);

  const handleRemove = (id) => {
    withAxios.delete(`cartItem/${id}`).then((res) => {
      console.log(res?.data);
      if (res?.data?.deletedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <>
      {isLoading ? (
        <div className="mt-16 text-center">
          <p>Please Wait...</p>{" "}
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto p-5 mt-16">
          <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
          {data?.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data?.map((item) => (
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
      )}
    </>
  );
}

export default CartProducts;
