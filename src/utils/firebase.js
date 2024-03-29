// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflix-app-c04ab.firebaseapp.com",
  projectId: "netflix-app-c04ab",
  storageBucket: "netflix-app-c04ab.appspot.com",
  messagingSenderId: "251443187898",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-GSLV35EK2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();