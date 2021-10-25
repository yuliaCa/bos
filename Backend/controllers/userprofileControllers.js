const Userprofile = require("../models/userProfileSchema");

const postProfile = (req, res) => {

    let newProfile = new Userprofile({
        fullname: req.body.fullname,
        emailAddress: req.body.emailAddress,
        cityLocation: req.body.cityLocation,
        gender: req.body.gender,
        skintype: req.body.skintype,
        concerns: req.body.concerns
    })

    newProfile.save()
    .then(result => {
       
        console.log("profile successfully saved in Mongo: " + result)
    })
    .catch(error =>

        console.error("profile not saved in Mongo: " + error)
    );
}

// // Get an individual profile

// const getProfile = (req, res) => {

// }

// // Get all profiles

// const getProfiles = (req, res) => {

// }


module.exports = {
    postProfile
}