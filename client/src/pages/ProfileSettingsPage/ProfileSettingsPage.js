import { useLocation, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styles from './ProfileSettingsPage.module.css';
import ButtonSelect from "./ButtonSelectSettings/ButtonSelectSettings"

import axios from 'axios';

//import functions from Firebase authentication SDK
import * as firebase from "../../authentication";

function ProfileSettingsPage(props) {
  
  const location = useLocation();
  const history = useHistory(); 

  useEffect(() => {
    props.handleIsHome(location);
  },[location, props]);

  const [input, setInput] = useState({
    fullname: "",
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

        const user = firebase.auth.currentUser;

        if (input.fullname !== undefined  && input.cityLocation !== undefined && input.gender !== undefined) {

            firebase.updateProfile(user, {
                displayName: input.fullname,
                photoURL: ""
            }).then(() => {
                console.log("user details updated: " + user.uid)      
            }).catch((error) => {
                console.error(`There was an error creating profile: ${error}`);
            });
        }
      
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
    };
 
    const updateUserProfile = (email, profile) => {
      axios.put(`/profile/updateUserProfile/${email}`, profile)
          .then(results => {
              console.log(profile);
              console.log('UPDATE SUCCESSFUL!')
          })
          .catch(error => console.log(error))
    };

    if (user !== null) {
    updateUserProfile(user.email, userProfile);
    }
  }

  const uploadPhoto = (email, profile) => {
    axios.patch(`/profile/updateUserProfile/${email}`, profile)
        .then(results => {
            console.log(profile);
            console.log('UPLOAD Successful!')
        })
        .catch(error => console.log(error))
  };

  return <>
    <form 
        className={styles.SettingsFormSection}>
        <h2 className={styles.AccountHeader}>Account Details</h2>
        <img 
        src="https://s3-us-west-2.amazonaws.com/bos-skincare/icons/profile.svg"
        className={styles.profileImage} />
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
          placeholder="Your full name here"
          pattern="[A-Za-z]+"
          autoComplete="off"
          value={input.fullname}
          required
        />
    
        <input 
          onChange={handleChange} 
          className={styles.imageUpload}
          type="file" 
          id="profile" 
          name="profile" 
          accept="image/png, image/jpeg" 
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
          placeholder="i.e. Vancouver"
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
          SAVE{" "}
        </button>

    </form>

  </>;
}

export default ProfileSettingsPage;