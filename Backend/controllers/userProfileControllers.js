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

    console.log(req.body.userEmailAddress);
    console.log(req.body.fullname);


    let newuserProfile = new userProfile({
        userEmailAddress: req.body.userEmailAddress,
        fullname: req.body.fullname,
        gender: req.body.gender,
        cityLocation: req.body.cityLocation,
        skintype: req.body.skintype,
        concerns: req.body.concerns,
        birthDate: req.body.birthDate,
        objMorningRoutineLog: req.body.objMorningRoutineLog,
        objEveningRoutineLog: req.body.objEveningRoutineLog
    });

  
    newuserProfile.save().then(result => {
            res.status(201).json({
                data: newuserProfile,
                url: `/profile/${newuserProfile._id}`
            });
        })
        .catch(error => res.status(500).send(error));
};

Folder.findOneAndUpdate(
    { "_id": folderId, "permissions._id": permission._id },
    { "permissions.$": permission},
)

exports.putNewProductMorning = (req, res) => {

    let updatedUserProfile = new userProfile({
        userEmailAddress: req.body.userEmailAddress,
        objMorningRoutineLog: req.body.objMorningRoutineLog
    });

  
    newuserProfile.findOneAndUpdate({ "userEmailAddress": updatedUserProfile.userEmailAddress },{ "objMorningRoutineLog": updatedUserProfile.objMorningRoutineLog}).then(result => {
            res.status(201).json({
                data: newuserProfile,
                url: `/addProductMorning/${newuserProfile._id}`
            });
        })
        .catch(error => res.status(500).send(error));
};


exports.putNewProductEvening = (req, res) => {

    let updatedUserProfile = new userProfile({
        userEmailAddress: req.body.userEmailAddress,
        objEveningRoutineLog: req.body.objEveningRoutineLog
    });

  
    newuserProfile.findOneAndUpdate({ "userEmailAddress": updatedUserProfile.userEmailAddress },{ "objEveningRoutineLog": updatedUserProfile.objEveningRoutineLog}).then(result => {
            res.status(201).json({
                data: newuserProfile,
                url: `/addProductMorning/${newuserProfile._id}`
            });
        })
        .catch(error => res.status(500).send(error));
};


exports.deleteProduct = (req, res) => {

    let deletePageContent = new PageContent({
        header: req.body.header
    });

    deletePageContent.find({"header":header}).remove.then(result => {
            res.status(201).json({
           
            });
        })
        .catch(error => res.status(500).send(error));
};