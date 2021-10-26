const Userprofile = require("../models/userProfileSchema");

postProfile = (req, res) => {

    let newProfile = new Userprofile({
        fullname: req.body.fullname,
        emailAddress: req.body.emailAddress,
        cityLocation: req.body.cityLocation,
        gender: req.body.gender,
        skintype: req.body.skintype,
        concerns: req.body.concerns
    });

    newProfile.save()
    .then(result => {
       
        res.status(201).json(result)
    })
    .catch(error =>

       res.status(500).json(error)
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