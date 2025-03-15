// @flow strict

import axios from 'axios';
import React from 'react';

const withAxios = axios.create({
    baseURL: 'http://localhost:3000/',
  });

function useAxios() {
   return withAxios;
};

export default useAxios;