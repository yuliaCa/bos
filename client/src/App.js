// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";

// Route component checks all paths and returns ALL results that start with matching path. This would result in nested pages. Not always the desired outcome.

// Switch component helps us navigate to the path that matches EXACTLY the path indicated.

import HomePage from "./pages/HomePage/HomePage";
import FeaturesPage from "./pages/FeaturesPage/FeaturesPage";

import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/Settings";
import TeamPage from "./pages/TeamPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage"
import LoginPage from "./pages/LoginPage/LoginPage"

import Navbar from "./components/NavBar/Navbar";

import PolicyPage from "./pages/PolicyPage";
import TosPage from "./pages/TosPage";

import Footer from "./components/Footer/Footer";

function App() {
  
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
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/settings">
            <SettingsPage />
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
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
