// ********************************************************************************************
// ********************* This page is the code for Firebase Initialization ********************
// ********************************************************************************************

import { initializeApp } from 'firebase/app'
import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

console.log("Connected to firebase.js");

// For Firebase JS SDK v9.0,
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDsE80-v0O03bHT9hV5SpviW0-K_XWQFdc",
    authDomain: "bureau-of-skincare.firebaseapp.com",
    projectId: "bureau-of-skincare",
    storageBucket: "bureau-of-skincare.appspot.com",
    messagingSenderId: "722992197009",
    appId: "1:722992197009:web:4d7e4571d3df59c16f7e30"
  };
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Declare Firebase Auth and DB
const auth = getAuth(firebaseApp);

export { auth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged };










