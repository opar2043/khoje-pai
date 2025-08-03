// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2cBEuVvjL-Xnu1MVZa0MMZWw8vMm4-iI",
  authDomain: "reacp-firebase.firebaseapp.com",
  projectId: "reacp-firebase",
  storageBucket: "reacp-firebase.firebasestorage.app",
  messagingSenderId: "710063606619",
  appId: "1:710063606619:web:bf792d145e00060967287e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth