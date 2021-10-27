import React, { useState } from 'react';
import styles from './RegistrationPage.module.css';
import axios from 'axios';

function RegistrationPage() {

    const [input, setInput] = useState({
        fullname: '',
        emailAddress: '',
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
        "dark spots": false,
        "red lines": false,
        "fine lines": false
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
            emailAddress: input.emailAddress,
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
                "dark spots": input["dark spots"],
                pores: input.pores,
                "red lines": input["red lines"],
                "fine lines": input["fine lines"]
            }
        }
        console.log(newProfile);
        axios.post('/register', newProfile);
    }

    return (

        <
        div >
        <
        form className = { styles.RegistrationFormSection } >

        <
        label htmlFor = "name" >
        Name <
        input onChange = { handleChange }
        type = "text"
        id = "name"
        name = "fullname"
        placeholder = "Your full name here"
        pattern = "[A-Za-z]+"
        autoComplete = "off"
        value = { input.fullname }
        required / >
        <
        /label>

        <
        label htmlFor = "email" >
        Email <
        input onChange = { handleChange }
        type = "email"
        id = "email"
        name = "emailAddress"
        placeholder = "sidney@bosmail.com"
        autoComplete = "off"
        value = { input.emailAddress }
        required / >
        <
        /label>

        <
        label htmlFor = "password" >
        Password <
        input type = "password"
        id = "password"
        name = "password"
        placeholder = "Password (min 8 characters)"
        minLength = "8"
        autoComplete = "off"
        required pattern = "[A-Za-z0-9!#$%]+" / >
        <
        /label>

        <
        label htmlFor = "confirmPassword" >
        Confirm Password <
        input type = "password"
        id = "confirmPassword"
        name = "confirm"
        autoComplete = "off"
        placeholder = "Confirm Password"
        required / >
        <
        /label>

        <
        label htmlFor = "cityLocation" >
        City Location <
        input onChange = { handleChange }
        id = "cityLocation"
        name = "cityLocation"
        placeholder = "i.e. Vancouver"
        pattern = "[A-Za-z]+"
        autoComplete = "off"
        value = { input.cityLocation }
        required / >
        <
        /label>

        <
        label htmlFor = "gender" >
        Gender <
        select onChange = { handleChange }
        name = "gender" >
        <
        option value = "" > --Please choose an option-- < /option> <
        option value = "male" > male < /option> <
        option value = "female" > female < /option> <
        option value = "binary" > binary < /option> <
        option value = "other" > other < /option> < /
        select > <
        /label>

        <
        fieldset >
        <
        legend > What is your skin type ? < /legend>

        <
        label > Dry <
        input onChange = { handleChange }
        type = "checkbox"
        name = "dry" / >
        <
        /label> <
        label > Normal <
        input onChange = { handleChange }
        type = "checkbox"
        name = "normal" / >
        <
        /label> <
        label > Oily <
        input onChange = { handleChange }
        type = "checkbox"
        name = "oily" / >
        <
        /label> <
        label > Combination <
        input onChange = { handleChange }
        type = "checkbox"
        name = "combination" / >
        <
        /label> <
        label > Sensitive <
        input onChange = { handleChange }
        type = "checkbox"
        name = "sensitive" / >
        <
        /label>

        <
        /fieldset>

        <
        fieldset >
        <
        legend > What are your concerns ? < /legend> <
        label >
        Acne <
        input onChange = { handleChange }
        type = "checkbox"
        name = "acne" / >
        <
        /label> <
        label >
        Dryness <
        input onChange = { handleChange }
        type = "checkbox"
        name = "dryness" / >
        <
        /label> <
        label >
        Oilyness <
        input onChange = { handleChange }
        type = "checkbox"
        name = "oilyness" / >
        <
        /label> <
        label >
        Blemishes <
        input onChange = { handleChange }
        type = "checkbox"
        name = "blemishes" / >
        <
        /label> <
        label >
        Dark Spots <
        input onChange = { handleChange }
        type = "checkbox"
        name = "dark spots" / >
        <
        /label> <
        label >
        Pores <
        input onChange = { handleChange }
        type = "checkbox"
        name = "pores" / >
        <
        /label> <
        label >
        Red Lines <
        input onChange = { handleChange }
        type = "checkbox"
        name = "red lines" / >
        <
        /label> <
        label >
        Fine Lines <
        input onChange = { handleChange }
        type = "checkbox"
        name = "fine lines" / >
        <
        /label> < /
        fieldset >

        <
        button onClick = { handleClick }
        type = "submit"
        name = "register"
        id = "submit" > Register < /button>

        <
        button type = "reset" > Reset fields < /button> < /
        form >

        <
        /div>

    )
}

export default RegistrationPage;