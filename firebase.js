// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDZ5SWywKinSlfihmV36-O9AjtW--NHi0",
  authDomain: "inventory-management-67b66.firebaseapp.com",
  projectId: "inventory-management-67b66",
  storageBucket: "inventory-management-67b66.appspot.com",
  messagingSenderId: "1069476164546",
  appId: "1:1069476164546:web:d0769e17de0c96bfc95c5b",
  measurementId: "G-VW54QGDGW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {firestore, auth, provider, signInWithPopup, signOut}