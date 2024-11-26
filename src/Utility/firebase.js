// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

//# Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDONhY7tYssIufngDnAF6k74Lx9vDnNg20",
  authDomain: "clone-2024-a9a9c.firebaseapp.com",
  projectId: "clone-2024-a9a9c",
  storageBucket: "clone-2024-a9a9c.firebasestorage.app",
  messagingSenderId: "1015036544069",
  appId: "1:1015036544069:web:47b7548c87177843524f2c",
  measurementId: "G-Y5STTCVDRB",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
