// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCbBM9E1mfU9KhMJ8msn31fhSbcFzKrhs",
  authDomain: "test-project-bb2d3.firebaseapp.com",
  projectId: "test-project-bb2d3",
  storageBucket: "test-project-bb2d3.firebasestorage.app",
  messagingSenderId: "420133394543",
  appId: "1:420133394543:web:ecb170d16918bc8390959a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)