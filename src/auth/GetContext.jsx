// @flow strict

import React, { createContext } from 'react';
const AuthContext = createContext(null);

function GetContext() {

    return AuthContext;
};

export default GetContext;