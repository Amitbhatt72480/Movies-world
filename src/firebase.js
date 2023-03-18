// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAzMgPgxpYb42DvlyCE6DLOHWJRUlpkLaU",
  authDomain: "movies-world-5c853.firebaseapp.com",
  projectId: "movies-world-5c853",
  storageBucket: "movies-world-5c853.appspot.com",
  messagingSenderId: "1063402788770",
  appId: "1:1063402788770:web:71afcf20ac33484126c4fb",
  measurementId: "G-HXYHQRGM2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
