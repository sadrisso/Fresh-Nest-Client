// @flow strict

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

function ProductDetails() {
  const { id } = useParams();
  const withAxios = useAxios()

  useEffect(() => {
    getProductData()
  }, [])

  const getProductData = () => {
    withAxios.get(`/product/${id}`)
        .then((res) => console.log(res?.data))
  }

  console.log(id);
  return <div></div>;
}

export default ProductDetails;
