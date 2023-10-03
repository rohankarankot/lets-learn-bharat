// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNUBDrsYlo_8qB0S-mfZKkLKlHgH20AB8",
  authDomain: "learn-bharat.firebaseapp.com",
  projectId: "learn-bharat",
  storageBucket: "learn-bharat.appspot.com",
  messagingSenderId: "722021714176",
  appId: "1:722021714176:web:de1f1f2d32089c56e64be5",
  measurementId: "G-X5LX40JBG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);