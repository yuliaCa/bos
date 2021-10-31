import React, { useState } from 'react';
import styles from './RegistrationPage.module.css';
import axios from 'axios';


function RegistrationPage() {

    const [input, setInput] = useState({
        fullname: '',
        userEmailAddress: '',
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
        axios.post('/', newProfile);
    }

    return (

        <div>
        <form className = { styles.RegistrationFormSection } >

        <label htmlFor = "name" className = { styles.fullnameLabel } >
        Name <input onChange = { handleChange }
        className = { styles.fullnameInput }
        type = "text"
        id = "name"
        name = "fullname"
        placeholder = "Your full name here"
        pattern = "[A-Za-z]+"
        autoComplete = "off"
        value = { input.fullname }
        required />
        </label>

        <label htmlFor = "email" className = { styles.emailLabel } >
        Email <input onChange = { handleChange }
        className = { styles.emailInput }
        type = "email"
        id = "email"
        name = "userEmailAddress"
        placeholder = "sidney.crosby@gmail.com"
        autoComplete = "off"
        value = { input.userEmailAddress }
        required />
        </label>

        <label htmlFor = "password" className = { styles.passwordLabel } >
        Password <input type = "password"
        className = { styles.passwordInput }
        id = "password"
        name = "password"
        placeholder = "Password (min 8 characters)"
        minLength = "8"
        autoComplete = "off"
        required pattern = "[A-Za-z0-9!#$%]+" />
        </label>

        <label htmlFor = "confirmPassword" className = { styles.passwordCfmLabel } >
        Confirm Password <input type = "password"
        className = { styles.passwordCfmInput }
        id = "confirmPassword"
        name = "confirm"
        autoComplete = "off"
        placeholder = "Confirm Password"
        required />
        </label>

        <label htmlFor = "cityLocation" className = { styles.locationLabel } >
        City Location <input onChange = { handleChange }
        className = { styles.locationInput }
        id = "cityLocation"
        name = "cityLocation"
        placeholder = "i.e. Vancouver"
        pattern = "[A-Za-z]+"
        autoComplete = "off"
        value = { input.cityLocation }
        required />
        </label>

        <label htmlFor = "gender" className = { styles.genderLabel } >
        Gender <select onChange = { handleChange }
        className = { styles.genderInput }
        name = "gender" >
        <option value = "" > --Please Select-- </option> 
        <option value = "male" > male </option> 
        <option value = "female" > female </option> 
        <option value = "binary" > binary </option> 
        <option value = "other" > other </option> 
        </select> 
        </label>

     
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
        id = "submit" > Register </button>

        <button type = "reset" 
        className = { styles.buttonReset } > Reset fields </button> 
        </form>

        </div>

    )
}

export default RegistrationPage;