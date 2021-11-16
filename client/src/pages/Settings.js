import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function SettingsPage(props) {
    const location = useLocation();

    const [input, setInput] = useState({
        fullname: sessionStorage.username,
        userEmailAddress: sessionStorage.email,
        password: "",
        ConfirmPassword: "",
        cityLocation: "",
        gender: "",
        image: "",
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


    const userProfile = {
        fullname: input.fullname,
        userEmailAddress: input.userEmailAddress,
        cityLocation: input.cityLocation,
        gender: input.gender,
        image: input.image,
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


    const updateUserProfile = (email, userProfile) => {
        axios.put(`/profile/updateUserProfile/${email}`, userProfile)
            .then(results => {
                console.log(userProfile);
                console.log('UPDATE SUCCESSFULL!')
            })
            .catch(error => console.log(error))
    };


    useEffect(() => {
    props.handleIsHome(location);
  },[location, props]);

  return <div style={ {marginTop:"10rem",}}>I am Settings Page</div>;
}

export default SettingsPage;
