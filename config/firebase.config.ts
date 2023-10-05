// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDNUBDrsYlo_8qB0S-mfZKkLKlHgH20AB8",
  authDomain: "learn-bharat.firebaseapp.com",
  databaseURL: "https://learn-bharat-default-rtdb.firebaseio.com/", 
  projectId: "learn-bharat",
  storageBucket: "learn-bharat.appspot.com",
  messagingSenderId: "722021714176",
  appId: "1:722021714176:web:de1f1f2d32089c56e64be5",
  measurementId: "G-X5LX40JBG6"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app);


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, auth, db };

