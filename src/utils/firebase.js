// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogify-c4384.firebaseapp.com",
  projectId: "blogify-c4384",
  storageBucket: "blogify-c4384.appspot.com",
  messagingSenderId: "584959582909",
  appId: "1:584959582909:web:6f05fc73f99624fcca8dd4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);