// import logo from './logo.svg';
import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import axios from 'axios';

// Route component checks all paths and returns ALL results that start with matching path. This would result in nested pages. Not always the desired outcome.

// Switch component helps us navigate to the path that matches EXACTLY the path indicated.

import HomePage from "./pages/HomePage/HomePage";
import FeaturesPage from "./pages/FeaturesPage/FeaturesPage";

import ProfilePage from "./pages/ProfilePage";
import ProfileSettingsPage from "./pages/ProfileSettingsPage/ProfileSettingsPage";
import TeamPage from "./pages/TeamPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ChangePwdPage from "./pages/ChangePwdPage/ChangePwdPage";

import Navbar from "./components/NavBar/Navbar";

import PolicyPage from "./pages/PolicyPage";
import TosPage from "./pages/TosPage";

import Footer from "./components/Footer/Footer";

import { ProfileImageContext } from "./contexts/ProfileImageContext.js";
import * as firebase from "./authentication.js";

function App() {
  const [isHome, setIsHome] = useState();

  const handleIsHome = (home) => {
    setIsHome(home.pathname);
  };

  console.log(isHome);

//Upload and update profile image.  Elevated to parent App level

const [input, setInput] = useState({
  image: ""
});
 
  const initialStateProfilePhoto = { 
    type: "",
    base64URL: "",
    name: ""};

  const [stateImage, setStateImage] = useState(initialStateProfilePhoto);
  const [retrievedData, setRetrievedData] = useState([]);

  const user = firebase.auth.currentUser;

  useEffect(function fetchUserProfile(){
    console.log(localStorage);

    if (user.email !== null) {
    axios.get(`https://bos-project2.herokuapp.com/register/${user.email}`)
    .then(result => {
 
      console.log(result.data);
      setInput(result.data);
      console.log(result.data.image.length);
   
      if(result.data.image.length > 0){
       
        for(let i=0; i< result.data.image.length; i++){
          console.log(result.data.image[i]);
          setStateImage(result.data.image[i]);
        }
      
      }else{
        setStateImage({ 
          type: "",
          base64URL: "",
          name: ""})
      }

      console.log(stateImage);
    })
    .catch(error=>console.log(error));
  }},[retrievedData]);

  const getBase64 = (file) => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

  const handleFileInputChange = (e) => {
    console.log(e.target.files[0]);
    console.log(input.image);
    let { file } = input.image;

    file = e.target.files[0];

    getBase64(file)
      .then(result => {
        file["base64"] = result;
        console.log("File Is:");
        console.log(e.target.files[0].type);
        console.log("base64 is:");
        console.log(result);
        
        setStateImage({
          base64URL: result,
          type: e.target.files[0].type,
          name: e.target.files[0].name
        }) ;
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <ProfileImageContext.Provider value={stateImage}>
          <Navbar isHome={isHome} handleIsHome={handleIsHome} />
          <Switch>
            <Route path="/profile">
              <ProfilePage isHome={isHome} handleIsHome={handleIsHome} />
            </Route>
            <Route path="/profileSettings">
              <ProfileSettingsPage handleFileInputChange={handleFileInputChange} isHome={isHome} handleIsHome={handleIsHome} />
            </Route>
          </Switch>
        </ProfileImageContext.Provider>
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
          <Route path="/change">
            <ChangePwdPage isHome={isHome} handleIsHome={handleIsHome} />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
