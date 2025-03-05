// @flow strict

import React from "react";
import useAuth from "../hooks/useAuth";

function Home() {
  const { name, age } = useAuth();
  console.log(name, age);
  return <div>I am home..</div>;
}

export default Home;
