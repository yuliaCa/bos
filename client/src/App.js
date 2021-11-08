// import logo from './logo.svg';
import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

// Route component checks all paths and returns ALL results that start with matching path. This would result in nested pages. Not always the desired outcome.

// Switch component helps us navigate to the path that matches EXACTLY the path indicated.

import HomePage from "./pages/HomePage/HomePage";
import FeaturesPage from "./pages/FeaturesPage/FeaturesPage";

import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/Settings";
import TeamPage from "./pages/TeamPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import Navbar from "./components/NavBar/Navbar";

import PolicyPage from "./pages/PolicyPage";
import TosPage from "./pages/TosPage";

import Footer from "./components/Footer/Footer";

function App() {
  const [isHome, setIsHome] = useState();

  const handleIsHome = (home) => {
    setIsHome(home.pathname);
  };

  console.log(isHome);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isHome={isHome} handleIsHome={handleIsHome} />
        <Switch>
          <Route path="/" exact>
            <HomePage isHome={isHome} handleIsHome={handleIsHome} />
          </Route>
          <Route path="/features">
            <FeaturesPage isHome={isHome} handleIsHome={handleIsHome} />
          </Route>
          <Route path="/team">
            <TeamPage isHome={isHome} handleIsHome={handleIsHome} />
          </Route>
          <Route path="/profile">
            <ProfilePage isHome={isHome} handleIsHome={handleIsHome} />
          </Route>
          <Route path="/settings">
            <SettingsPage isHome={isHome} handleIsHome={handleIsHome} />
          </Route>
          <Route path="/policy">
            <PolicyPage isHome={isHome} handleIsHome={handleIsHome} />
          </Route>
          <Route path="/tos">
            <TosPage isHome={isHome} handleIsHome={handleIsHome} />
          </Route>
          <Route path="/registration">
            <RegistrationPage isHome={isHome} handleIsHome={handleIsHome} />
          </Route>
          <Route path="/login">
            <LoginPage isHome={isHome} handleIsHome={handleIsHome} />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
