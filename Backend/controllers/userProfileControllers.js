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
        fullname: { type: String, required: true },
        gender: { type: String },
        birthDate: { type: Date, default: Date.now }
    });

    newuserProfile.save().then(result => {
            res.status(201).json({
                data: newuserProfile,
                url: `/profile/${newuserProfile._id}`
            });
        })
        .catch(error => res.status(500).send(error));
};