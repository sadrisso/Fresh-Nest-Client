/* eslint-disable no-unused-vars */
// @flow strict
import React, { useEffect, useState } from "react";
import GetContext from "./GetContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.init";

// Create Context
// export const AuthContext = createContext(null);
export const AuthContext = GetContext();

function AuthProvider({ children }) {
    
  const [user, setUser] = useState(null);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth)
  } 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user here --> ", currentUser);
      setUser(currentUser)
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { signUp, signIn, user, logOut };

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
