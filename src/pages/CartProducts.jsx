// @flow strict

import React, { useState } from "react";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { BiPurchaseTag } from "react-icons/bi";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";

function CartProducts() {
  const withAxios = useAxios();
  const [isLoading, setIsLoading] = useState(true);

  const { data: cartData, refetch: cartRefetch } = useQuery({
    queryKey: ["cartItems"],
    queryFn: async () => {
      const res = await withAxios.get("cartItems");
      setIsLoading(false);
      return res?.data;
    },
  });

  console.log("cart data", cartData);

  const handleRemove = (id) => {
    withAxios.delete(`cartItem/${id}`).then((res) => {
      console.log(res?.data);
      if (res?.data?.deletedCount > 0) {
        cartRefetch();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Removed from the cart",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDecrease = async (id) => {
    try {
      const res = await withAxios.patch(`updateQuantity/${id}?action=decrease`);
      cartRefetch();
      console.log(res?.data);
    } catch (error) {
      console.error("Error increasing quantity:", error);
    }
  };

  const handleIncrease = async (id) => {
    try {
      const res = await withAxios.patch(`updateQuantity/${id}?action=increase`);
      cartRefetch();
      console.log(res?.data);
    } catch (error) {
      console.error("Error increasing quantity:", error);
    }
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
          {cartData?.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cartData?.map((item) => (
                <div
                  key={item._id}
                  className=" bg-[#EEEEEE] p-4 rounded-lg shadow-md flex items-center gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-700">${item.price}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xs">Quantity: </p>
                      <FaCircleMinus
                        className="text-red-500"
                        onClick={() => handleDecrease(item?._id)}
                      />
                      <span className="text-black">{item?.quantity}</span>
                      <FaPlusCircle
                        className="text-green-500"
                        onClick={() => handleIncrease(item?._id)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-1">
                    <IoMdRemoveCircleOutline
                      onClick={() => handleRemove(item._id)}
                      className="hover:text-red-500 md:text-2xl"
                    />

                    <Link to={`/purchase/${item?._id}`}>
                      <BiPurchaseTag className="hover:text-green-500 md:text-2xl" />
                    </Link>
                  </div>
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
