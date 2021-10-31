// import logo from './logo.svg';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";

//import functions from Firebase authentication SDK
// To set up Firebase, we referenced the source code from 
// https://github.com/Devalo/Firebase-auth-react-express-mongodb

import * as firebase from './authentication';

// Route component checks all paths and returns ALL results that start with matching path. This would result in nested pages. Not always the desired outcome.

// Switch component helps us navigate to the path that matches EXACTLY the path indicated.

import HomePage from "./pages/HomePage/HomePage";
import FeaturesPage from "./pages/FeaturesPage/FeaturesPage";
import ContactPage from "./pages/ContactPage";

import ProfilePage from "./pages/ProfilePage";

import TeamPage from "./pages/TeamPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage"
import LoginPage from "./pages/LoginPage/LoginPage"

import Navbar from "./components/NavBar/Navbar";

import AboutPage from "./pages/AboutPage";
import PolicyPage from "./pages/PolicyPage";
import TosPage from "./pages/TosPage";

import Footer from "./components/Footer/Footer";

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  firebase.onAuthStateChanged(firebase.auth, (user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });  
  
  const signOut = () => {
  
  firebase.signOut(firebase.auth).then(() => {
    console.log("sign out successful");
  }).catch((error) => {
    console.error("Error signing out, ", error.message);
  });
  };

  return (

    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/features">
            <FeaturesPage />
          </Route>
          <Route path="/team">
            <TeamPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/policy">
            <PolicyPage />
          </Route>
          <Route path="/tos">
            <TosPage />
          </Route>
          <Route path="/registration">
            <RegistrationPage />
          </Route>
        </Switch>

      {!isLoggedIn ? (
        <>
        <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        </Switch>
        </>
      ) : (
          <>
        <span onClick={signOut}>
          <Link to="#">Sign out</Link>
        </span>
          </>
        )}

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
