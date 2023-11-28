// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// If this shit isnt working type 'npm i' into your terminal

const firebaseConfig = {
  apiKey: "AIzaSyBh1UFfDoC9meS3PaU-ZC7Rujm7cidbyXI",
  authDomain: "ato-gamma-mu.firebaseapp.com",
  projectId: "ato-gamma-mu",
  storageBucket: "ato-gamma-mu.appspot.com",
  messagingSenderId: "933428144661",
  appId: "1:933428144661:web:575041f4ef34f27bc47c1c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);