import { useLocation, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { ProfileImageContext } from "../../contexts/ProfileImageContext";
import styles from './ProfileSettingsPage.module.css';
import ButtonSelect from "./ButtonSelectSettings/ButtonSelectSettings";

import * as firebase from "../../authentication.js";
import axios from 'axios';


function ProfileSettingsPage(props) {
  
  const location = useLocation();
  const history = useHistory(); 

  const [errorMessage, setErrorMessage] = useState();
  const [saveButton, setSaveButton] = useState("SAVE");

  const image = useContext(ProfileImageContext);

  const user = firebase.auth.currentUser;

  useEffect(() => {
  
    props.handleIsHome(location);
   
  },[location, props]);

  const [input, setInput] = useState({
    fullname: user ? user.displayName : "",
    cityLocation: "",
    image: "",
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

    setSaveButton("SAVED");

        if (input.fullname !== ""  && input.cityLocation !== "" && input.gender !== "") {

            firebase.updateProfile(user, {
                displayName: input.fullname,
                photoURL: image.base64URL
            }).then(() => {
                console.log("user details updated: " + user.uid)      
            }).catch((error) => {
                console.error(`There was an error creating profile: ${error}`);
            });

            const userProfile = {
              fullname: input.fullname,
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
              image: image
            };
         
            const updateUserProfile = (email, profile) => {
              axios.put(`https://bos-project2.herokuapp.com/profile/updateUserProfile/${email}`, profile)
                  .then(results => {
                      console.log(profile);
                      history.push("/profile");
                  })
                  .catch(error => console.log(error))
            };
        
            if (user !== null) {
            updateUserProfile(user.email, userProfile);
            }
        } else {
          setErrorMessage("Please fill out all the fields.");
        }
  }

  return <>
    <form className={ styles.settingsForm }>
      <div className={styles.SettingsFormSectionTop}>
        <h2 className={styles.AccountHeader}>Account Details</h2>

        <h3 className={styles.errorMessage}>{errorMessage !== undefined ? errorMessage : ""}</h3>

        {image.base64URL ?
         <img 
         src={image.base64URL} alt="profilephoto"
         className={styles.profileImage} />
        :
        <img 
        src="https://s3-us-west-2.amazonaws.com/bos-skincare/icons/profile.svg" alt="profilephoto"
        className={styles.profileImage} />
        }

        <label 
          htmlFor="name" 
          className={styles.fullnameLabel}>
          Name
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
          htmlFor="profile"
          className={styles.imageUploadLabel}>
          UPLOAD IMAGE
          <input 
            onChange={props.handleFileInputChange}
            className={styles.imageUpload}
            type="file" 
            id="profile" 
            name="profile" 
            accept="image/png, image/jpeg"
          />
        </label>

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
      </div>

      <div className={styles.SettingsFormSectionBottom}>
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
          {saveButton}{" "}
        </button>
      </div>
    </form>
  </>;
}

export default ProfileSettingsPage;