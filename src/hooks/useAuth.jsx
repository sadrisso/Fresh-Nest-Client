// @flow strict

import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';

function useAuth() {

    return useContext(AuthContext)
};

export default useAuth;