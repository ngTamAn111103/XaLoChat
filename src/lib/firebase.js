// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "xalochat-9a151.firebaseapp.com",
  projectId: "xalochat-9a151",
  storageBucket: "xalochat-9a151.appspot.com",
  messagingSenderId: "504485226636",
  appId: "1:504485226636:web:75b30a69adb13e134b73a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: "reactxalochat.firebaseapp.com",
//   projectId: "reactxalochat",
//   storageBucket: "reactxalochat.appspot.com",
//   messagingSenderId: "627876587038",
//   appId: "1:627876587038:web:be4cfdf964ae776ac7b00f"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()