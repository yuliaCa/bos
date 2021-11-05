// To set up Firebase login, we referenced the source code from 
// https://github.com/Devalo/Firebase-auth-react-express-mongodb

//import functions from Firebase authentication SDK
import * as firebase from '../../authentication';

import React, { useState } from 'react';
import styles from './RegistrationPage.module.css';
import axios from 'axios';


function RegistrationPage() {

    const [input, setInput] = useState({
        fullname: '',
        userEmailAddress: '',
        password: '',
        ConfirmPassword:'',
        cityLocation: '',
        gender: '',
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
        fine_lines: false
    })

    function handleChange(event) {
        const isCheckbox = event.target.type === 'checkbox';
        let { name, value } = event.target;

        setInput(prev => {
            return {
                ...prev,
                [name]: value = isCheckbox ? event.target.checked : value
            }
        })
    }

    function handleClick(event) {
        
        event.preventDefault();

        if (input.password === input.ConfirmPassword) {

            firebase.createUserWithEmailAndPassword(firebase.auth, input.userEmailAddress, input.password)
            .then((userCredential) => {
            const user = userCredential.user;
            firebase.updateProfile(firebase.auth.currentUser, {
                displayName: input.fullname,
                photoURL: ""
            }).then(() => {
                console.log("user registered: " + firebase.auth.currentUser.uid)
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

        const newProfile = {
            fullname: input.fullname,
            userEmailAddress: input.userEmailAddress,
            cityLocation: input.cityLocation,
            gender: input.gender,
            skintype: {
                dry: input.dry,
                normal: input.normal,
                combination: input.combination,
                sensitive: input.sensitive
            },
            concerns: {
                acne: input.acne,
                dryness: input.dryness,
                oilyness: input.oilyness,
                blemishes: input.blemishes,
                dark_spots: input.dark_spots,
                pores: input.pores,
                red_lines: input.red_lines,
                fine_lines: input.fine_lines
            }
        }
        console.log(newProfile);

        axios.post('/register', newProfile)
        .catch(error => {
            if (error.response) {
                console.log(error.response.data);
            }
        });

    }

    return (

        <>
        <h1 className={styles.registerHeading}>Register</h1>
        <form className = { styles.RegistrationFormSection } >

        <label htmlFor = "name" className = { styles.fullnameLabel } >
        Name
        </label> 
        <input onChange = { handleChange }
        className = { styles.fullnameInput }
        type = "text"
        id = "name"
        name = "fullname"
        placeholder = "Your full name here"
        pattern = "[A-Za-z]+"
        autoComplete = "off"
        value = { input.fullname }
        required />
       

        <label htmlFor = "email" className = { styles.emailLabel } >
        Email 
        </label>
        <input onChange = { handleChange }
        className = { styles.emailInput }
        type = "email"
        id = "email"
        name = "userEmailAddress"
        placeholder = "sidney.crosby@gmail.com"
        autoComplete = "off"
        value = { input.userEmailAddress }
        required />
       

        <label htmlFor = "password" className = { styles.passwordLabel } >
        Password 
        </label>
        <input onChange = { handleChange }
        type = "password"
        className = { styles.passwordInput }
        value = { input.password }
        id = "password"
        name = "password"
        placeholder = "Password (min 8 characters)"
        minLength = "8"
        autoComplete = "off"
        required pattern = "[A-Za-z0-9]+" />
        

        <label htmlFor = "confirmPassword" className = { styles.passwordCfmLabel } >
        Confirm Password 
        </label>
        <input onChange = { handleChange }
        type = "password"
        className = { styles.passwordCfmInput }
        value = { input.ConfirmPassword }
        id = "confirmPassword"
        name = "ConfirmPassword"
        autoComplete = "off"
        placeholder = "Confirm Password"
        required />
        

        <label htmlFor = "cityLocation" className = { styles.locationLabel } >
        City Location 
        </label>
        <input onChange = { handleChange }
        className = { styles.locationInput }
        id = "cityLocation"
        name = "cityLocation"
        placeholder = "i.e. Vancouver"
        pattern = "[A-Za-z]+"
        autoComplete = "off"
        value = { input.cityLocation }
        required />
        

        <label htmlFor = "gender" className = { styles.genderLabel } >
        Gender 
        </label>
        <select onChange = { handleChange }
        className = { styles.genderInput }
        name = "gender" >
        <option value = "" > --Please Select-- </option> 
        <option value = "male" > male </option> 
        <option value = "female" > female </option> 
        <option value = "binary" > non-binary </option> 
        <option value = "other" > other </option> 
        </select> 
        

     
        <legend className = { styles.skintypeLabel } > What is your skin type ? </legend>

        <label className = { styles.dryLabel } > Dry 
            <input onChange = { handleChange }
        className = { styles.Checkbox }
        type = "checkbox"
        name = "dry" />
        </label> 
        <label className = { styles.normalLabel } > Normal 
            <input onChange = { handleChange }
        className = { styles.Checkbox }
        type = "checkbox"
        name = "normal" />
        </label> 
        <label className = { styles.oilyLabel } > Oily 
            <input onChange = { handleChange }
        className = { styles.Checkbox }
        type = "checkbox"
        name = "oily" />
        </label> 
        <label className = { styles.combinationLabel } > Combination 
            <input onChange = { handleChange }
        className = { styles.Checkbox }
        type = "checkbox"
        name = "combination" />
        </label> 
        <label className = { styles.sensitiveLabel } > Sensitive 
            <input onChange = { handleChange }
        className = { styles.Checkbox }
        type = "checkbox"
        name = "sensitive" />
        </label>

    

      
        <legend className = { styles.concernsLabel } > What are your concerns ? </legend> 
        <label className = { styles.acneLabel } >
        Acne 
        <input onChange = { handleChange }
        className = { styles.Checkbox }
        type = "checkbox"
        name = "acne" />
        </label> 
        <label className = { styles.drynessLabel } >
        Dryness 
        <input onChange = { handleChange }
        className = { styles.Checkbox }
        type = "checkbox"
        name = "dryness" />
        </label> 
        <label className = { styles.oilynessLabel } >
        Oilyness 
        <input onChange = { handleChange }
        className = { styles.Checkbox }
        type = "checkbox"
        name = "oilyness" />
        </label> 
        <label className = { styles.blemishesLabel } >
        Blemishes 
        <input onChange = { handleChange }
        className = { styles.Checkbox }
        type = "checkbox"
        name = "blemishes" />
        </label> 
        <label className = { styles.darkspotsLabel } >
        Dark Spots 
        <input onChange = { handleChange }
        className = { styles.Checkbox }
        type = "checkbox"
        name = "dark_spots" />
        </label> 
        <label className = { styles.poresLabel } >
        Pores 
        <input onChange = { handleChange }
        className = { styles.Checkbox }
        type = "checkbox"
        name = "pores" />
        </label> 
        <label className = { styles.redlinesLabel } >
        Red Lines 
        <input onChange = { handleChange }
        className = { styles.Checkbox }
        type = "checkbox"
        name = "red_lines" />
        </label> 
        <label className = { styles.finelinesLabel } >
        Fine Lines 
        <input onChange = { handleChange }
        className = { styles.Checkbox }
        type = "checkbox"
        name = "fine_lines" />
        </label> 
      

        <button onClick = { handleClick }
        className = { styles.buttonRegister }
        type = "submit"
        name = "register"
        id = "submit" > REGISTER </button>

        </form>

        </>

    )
}

export default RegistrationPage;