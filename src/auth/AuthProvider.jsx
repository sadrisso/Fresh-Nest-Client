// @flow strict
import React from 'react';
import GetContext from './GetContext';

// Create Context
// export const AuthContext = createContext(null);
export const AuthContext = GetContext()

function AuthProvider({children}) {

    const authInfo = {name: "drisso", age: 24}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;