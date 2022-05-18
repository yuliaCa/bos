// ********************************************************************************************
// ********************* This page is the code for Firebase Initialization ********************
// ********************************************************************************************

import { initializeApp } from 'firebase/app'
import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";

console.log("Connected to firebase.js");

// For Firebase JS SDK v9.0,
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Declare Firebase Auth and DB
const auth = getAuth(firebaseApp);

export { auth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail};










