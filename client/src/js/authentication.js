// ********************************************************************************************
// ********************* This page is the code for Firebase Initialization ********************
// ********************************************************************************************


console.log("Connected to firebase.js");

import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

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


//Sign up new user on registration page

class userInfo {
  constructor(username, email, location, gender, skintype, concerns) {
    this.username = username, 
    this.email = email,
    this.location = location,
    this.gender = gender,
    this.skintype = skintype,
    this.concerns = concerns
  }
  literalObject() { 
    return { 
      name: this.username, 
      email: this.email,
      password: this.location,
      gender: this.gender,
      skintype: this.skintype,
      concerns: this.concerns
     }; 
  }

signUp (username, email, password, photo) {
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    alert("signed in!")
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photo
    }).then(() => {
      alert("profile created")
    }).catch((error) => {
      console.error(`There was an error creating profile: ${error}`);
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`There was an error signing up: ${errorCode}, ${errorMessage}`);
  });
}
}

// Sign in user

loginButton.addEventListener("click", (event) => {
  // event.preventDefault();

  const loginEmail = loginEmail.value.trim();
  const loginPassword = loginPassword.value.trim();

  if (loginEmail.length && loginPassword.length) {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((user) => {
        if (user) {
          console.log("logged in!");
        }
      })
      .catch((error) => {
        console.error("Error signing in, ", error.message);
      });
    }
});


// Get the currently signed-in user

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }

});

// Sign out user

import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
signOut(auth).then(() => {
  console.log("sign out successful");
  alert("sign out successful");
}).catch((error) => {
  console.error("Error signing out, ", error.message);
  alert(error.message);
});

// *********** New User Registration *******************

exports.register = function() {

}

