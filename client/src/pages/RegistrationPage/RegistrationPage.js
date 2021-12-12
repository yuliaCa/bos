import { useLocation, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styles from "./RegistrationPage.module.css";
import * as firebase from "../../authentication";
import axios from "axios";

import ButtonSelect from "./ButtonSelect";

function RegistrationPage(props) {
  
  const location = useLocation();
  const history = useHistory(); 

  useEffect(() => {
    props.handleIsHome(location);
  },[location, props]);

  const [errorMessages, setErrorMessages] = useState([]);
  const [firebaseErrorMsg, setfirebaseErrorMsg] = useState();
  const [passwordMatch, setPasswordMatch] = useState(true);

  const [input, setInput] = useState({
    fullname: sessionStorage.username ? sessionStorage.username : "",
    userEmailAddress: sessionStorage.email ? sessionStorage.email : "",
    password: "",
    ConfirmPassword: "",
    cityLocation: "",
    gender: "",
    dry: false,
    normal: false,
    combination: false,
    sensitive: false,
    acne: false,
    dryness: false,
    oilyness: false,
    blemishes: false,
    pores: false,
    dark_spots: false,
    red_lines: false,
    fine_lines: false,
  });

  function handleChange(event) {
    const isCheckbox = event.target.type === "checkbox";
    let { name, value } = event.target;

    setInput((prev) => {
      return {
        ...prev,
        [name]: (value = isCheckbox ? event.target.checked : value),
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();

        if (input.password !== undefined && input.password === input.ConfirmPassword) {

            firebase.createUserWithEmailAndPassword(firebase.auth, input.userEmailAddress, input.password)
            .then(() => {
              firebase.updateProfile(firebase.auth.currentUser, {
                  displayName: input.fullname,
              }).then(() => {
                  console.log("user registered: " + firebase.auth.currentUser.uid);      
              }).catch((error) => {
              });
           
            })
            .catch((error) => {
              const errorMessage = error.message;
              setfirebaseErrorMsg(errorMessage);
              });  
        } else {
          setPasswordMatch(false);
        }
      
    const newProfile = {
      fullname: input.fullname,
      userEmailAddress: input.userEmailAddress,
      cityLocation: input.cityLocation,
      gender: input.gender,
      skintype: {
        dry: input.dry,
        normal: input.normal,
        combination: input.combination,
        sensitive: input.sensitive,
      },
      concerns: {
        acne: input.acne,
        dryness: input.dryness,
        oilyness: input.oilyness,
        blemishes: input.blemishes,
        dark_spots: input.dark_spots,
        pores: input.pores,
        red_lines: input.red_lines,
        fine_lines: input.fine_lines,
      },
    };

    axios.post("https://bos-project2.herokuapp.com/register", newProfile)
    .then(()=>{
      history.push("/profile");
      sessionStorage.setItem("email",input.userEmailAddress);
    })
    .catch((error) => {
      if (error.response) {
        setErrorMessages(error.response.data);
      }
    });
  }

  return (
    <>
    <div class={styles.wrapper}>
        <div className={styles.regContainer}>
        <h1 className={styles.registerHeading}>Register</h1>
        <form 
          className={styles.RegistrationFormSection}>
          <label 
            htmlFor="name" 
            className={styles.fullnameLabel}>
            Name <br/>
            {errorMessages.length >= 1 && errorMessages.find(error => error.message.includes("full name")) ? <em style={{color:"red"}}> {errorMessages.find(error => error.message.includes("full name")).message} </em> : ""}
          </label>
          <input
            onChange={handleChange}
            className={styles.fullnameInput}
            type="text"
            id="name"
            name="fullname"
            placeholder=" Your full name here"
            pattern="[A-Za-z]+"
            autoComplete="off"
            value={input.fullname}
            required
          />

          <label 
            htmlFor="email" 
            className={styles.emailLabel}>
            Email <br/>
            {errorMessages.length >= 1 && errorMessages.find(error => error.message.includes("email")) ? <em style={{color:"red"}}> {errorMessages.find(error => error.message.includes("email")).message} </em> : ""}
          </label>
          <input
            onChange={handleChange}
            className={styles.emailInput}
            type="email"
            id="email"
            name="userEmailAddress"
            placeholder=" douglas.leung@bosmail.com"
            autoComplete="off"
            value={input.userEmailAddress}
            required
          />

          <label 
            htmlFor="password" 
            className={styles.passwordLabel}>
            Password 
          </label>
          <input
            onChange={handleChange}
            type="password"
            className={styles.passwordInput}
            value={input.password}
            id="password"
            name="password"
            placeholder=" Password (min 8 characters)"
            minLength="8"
            autoComplete="off"
            required
            pattern="[A-Za-z0-9]+"
          />

          <label 
            htmlFor="confirmPassword" 
            className={styles.passwordCfmLabel}>
            Confirm Password <br />
            {passwordMatch ? "" : <em style={{color:"red"}}>{"Passwords do not match."}</em>}
          </label>
          <input
            onChange={handleChange}
            type="password"
            className={styles.passwordCfmInput}
            value={input.ConfirmPassword}
            id="confirmPassword"
            name="ConfirmPassword"
            autoComplete="off"
            placeholder=" Confirm Password"
            required
          />

          <label 
            htmlFor="cityLocation" 
            className={styles.locationLabel}>
            City Location
          </label>
          <input
            onChange={handleChange}
            className={styles.locationInput}
            id="cityLocation"
            name="cityLocation"
            placeholder=" i.e. Vancouver"
            pattern="[A-Za-z]+"
            autoComplete="off"
            value={input.cityLocation}
            required
          />
          <div className={styles.errorMessage}>
            {errorMessages.length >= 1 && errorMessages.find(error => error.message.includes("location")) ? <em style={{color:"red"}}> {errorMessages.find(error => error.message.includes("location")).message} </em> : ""}
            {errorMessages.length >= 1 && errorMessages.find(error => error.message.includes("identity")) ? <em style={{color:"red"}}> { errorMessages.find(error => error.message.includes("identity")).message} </em> : ""} 
          </div>
          <label 
            htmlFor="gender" 
            className={styles.genderLabel}>
            Gender
          </label>
          <select
            onChange={handleChange}
            className={styles.genderInput}
            name="gender"
          >
            <option value=""> --Please Select-- </option>
            <option value="male"> male </option>
            <option value="female"> female </option>
            <option value="binary"> non-binary </option>
            <option value="other"> other </option>
          </select>

          <legend className={styles.skintypeLabel}>
            {" "}
            What is your skin type ?{" "}
          </legend>
          
          <div className={styles.dryLabel}>
            <ButtonSelect 
              change={handleChange} 
              labelname="dry" 
              name="dry" 
              custom="dryLabel"/>
          </div>
          <div className={styles.normalLabel}>
            <ButtonSelect 
              change={handleChange} 
              labelname="normal" 
              name="normal" 
              custom="normalLabel" />
          </div>
          <div className={styles.oilyLabel}>
            <ButtonSelect 
              change={handleChange} 
              labelname="oily" 
              name="oily" 
              custom="oilyLabel" />
          </div>
          <div className={styles.combinationLabel}>
            <ButtonSelect 
              change={handleChange} 
              labelname="combination" 
              name="combination" 
              custom="combinationLabel" />
          </div>
          <div className={styles.sensitiveLabel}>
            <ButtonSelect 
              change={handleChange} 
              labelname="sensitive" 
              name="sensitive" 
              custom="sensitiveLabel" />
          </div>
      
          <legend className={styles.concernsLabel}>
            {" "}
            What are your concerns ?{" "}
          </legend>

          <div className={styles.acneLabel}>
            <ButtonSelect 
              change={handleChange} 
              labelname="acne" 
              name="acne" 
              custom="acneLabel" />
          </div>
          <div className={styles.drynessLabel}>
            <ButtonSelect 
              change={handleChange} 
              labelname="dryness" 
              name="dryness" 
              custom="drynessLabel" />
          </div>
          <div className={styles.oilynessLabel}>
            <ButtonSelect 
              change={handleChange} 
              labelname="oilyness" 
              name="oilyness" 
              custom="oilynessLabel" />
          </div>
          <div className={styles.blemishesLabel}>
            <ButtonSelect 
              change={handleChange} 
              labelname="blemishes" 
              name="blemishes" 
              custom="blemishesLabel" />
          </div>
          <div className={styles.darkspotsLabel}>
            <ButtonSelect 
              change={handleChange} 
              labelname="dark spots" 
              name="dark_spots" 
              custom="darkspotsLabel" />
          </div>
          <div className={styles.poresLabel}>
            <ButtonSelect 
              change={handleChange} 
              labelname="pores" 
              name="pores" 
              custom="poresLabel" />
          </div>
          <div className={styles.redlinesLabel}>
            <ButtonSelect 
              change={handleChange} 
              labelname="red lines" 
              name="red_lines" 
              custom="redlinesLabel" />
          </div>
          <div className={styles.finelinesLabel}>
            <ButtonSelect 
              change={handleChange} 
              labelname="fine lines" 
              name="fine_lines" 
              custom="finelinesLabel" />
          </div>
        
          <button
            onClick={handleClick}
            className={styles.buttonRegister}
            type="submit"
            name="register"
            id="submit"
          >
            {" "}
            REGISTER{" "}
          </button>
          <div className={styles.firebaseErrorMsg}>
            <em style={{color:"red"}}>{firebaseErrorMsg}</em>
          </div>
        </form>
        </div>
      </div>
    </>
  );
}

export default RegistrationPage;
