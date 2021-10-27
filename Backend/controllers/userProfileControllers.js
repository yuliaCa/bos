const userProfile = require("../models/userProfileSchema.js");

exports.getUserProfile = (req, res) => {
    //req.params.userEmail
    userProfile.find({}).exec()
        .then(results => {
            res.status(200).json(results);
        })
        .catch(error => res.status(500).send(error));
};

exports.getUserProfileByEmail = (req, res) => {
    //req.params.userEmail
    userProfile.findOne({ userEmailAddress: String(req.params.userEmail).toLowerCase() }).exec()
        .then(results => {
            res.status(200).json(results);
        })
        .catch(error => res.status(500).send(error));
};


exports.postNewUserProfile = (req, res) => {

    let newuserProfile = new userProfile({
        userEmailAddress: req.params.userEmail,
        objMorningRoutineLog: req.body.morningRoutineLog,
        objEveningRoutineLog: req.body.eveningRoutineLog,
        fullname: req.body.fullname,
        gender: req.body.gender,
        birthDate: req.body.birthDate,
        cityLocation: req.body.cityLocation,
        dry: req.body.dry,
        normal: req.body.normal,
        combination: req.body.combination,
        sensitive: req.body.sensitive,
        acne: req.body.acne,
        dryness: req.body.dryness,
        oilyness: req.body.oilyness,
        blemishes: req.body.blemishes,
        pores: req.body.pores,
    });

    newuserProfile.save().then(result => {
            res.status(201).json({
                data: newuserProfile,
                url: `/profile/${newuserProfile._id}`
            });
        })
        .catch(error => res.status(500).send(error));
};