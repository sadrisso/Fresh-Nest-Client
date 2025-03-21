import React from "react";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Purchase = () => {
  const withAxios = useAxios();
  const navigate = useNavigate();
  const {id} = useParams();

  const { data: cartItem, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await withAxios.get(`cartItem/${id}`);
      return res?.data || [];
    },
  });

  console.log("id: ", id)
  console.log("item: ", cartItem)

  // Proceed to Checkout
  const handleCheckout = () => {
    Swal.fire({
      icon: "info",
      title: "Redirecting to Payment...",
      showConfirmButton: false,
      timer: 2000,
    });

    setTimeout(() => {
      navigate("/payment");
    }, 2000);
  };

  if (isLoading) return <p className="text-center text-lg">Loading cart...</p>;

  return (
    <div className="max-w-5xl mx-auto mt-16 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-6">🛒 Review Your Order</h1>

      <div className="space-y-4">
          <div key={cartItem._id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
            <div className="flex items-center space-x-4">
              <img
                src={cartItem.image || "https://via.placeholder.com/80"}
                alt={cartItem.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h2 className="text-lg font-semibold">{cartItem.name}</h2>
                <p className="text-gray-500">${cartItem.price} each</p>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-2">
              <button
                
                className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400 transition"
              >
                -
              </button>
              <span className="text-lg font-semibold"></span>
              <button
                
                className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400 transition"
              >
                +
              </button>
            </div>

            <p className="font-semibold text-lg"></p>
          </div>
      </div>

      {/* Summary & Checkout */}
      <div className="mt-6 p-4 bg-gray-200 rounded-lg shadow">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        <p className="text-lg mt-2">Total: <span className="font-bold text-green-600"></span></p>
        <button
          onClick={handleCheckout}
          className="mt-4 px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition w-full"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Purchase;
