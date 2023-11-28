// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// If this shit isnt working type 'npm i' into your terminal

const firebaseConfig = {
  apiKey: "AIzaSyCI0ng7gTqI2CXV2Nu8XK7FTMjKN0crlig",
  authDomain: "pictoglot.firebaseapp.com",
  projectId: "pictoglot",
  storageBucket: "pictoglot.appspot.com",
  messagingSenderId: "746569222787",
  appId: "1:746569222787:web:ae752d09c43e2617a4a9b6",
  measurementId: "G-T0J39NG55J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);