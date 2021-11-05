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

// Folder.findOneAndUpdate(
//     { "_id": folderId, "permissions._id": permission._id },
//     { "permissions.$": permission},
// )

exports.putNewProductMorning = (req, res) => {

    let updatedUserProfile = new userProfile({
        userEmailAddress: req.body.userEmailAddress,
        objMorningRoutineLog: req.body.objMorningRoutineLog
    });

    console.log(updatedUserProfile);

    userProfile.findOneAndUpdate(
        { userEmailAddress: updatedUserProfile.userEmailAddress },
        { $push: { objMorningRoutineLog: updatedUserProfile.objMorningRoutineLog} }
      ).then(result => {
        res.status(201).json({
            data: updatedUserProfile,
            url: `/addProductMorning/${updatedUserProfile._id}`
        });
    }).catch(error => res.status(500).send(error));
    
};


exports.putNewProductEvening = (req, res) => {

    let updatedUserProfile = new userProfile({
        userEmailAddress: req.body.userEmailAddress,
        objEveningRoutineLog: req.body.objEveningRoutineLog
    });

    console.log(updatedUserProfile);

    userProfile.findOneAndUpdate(
        { userEmailAddress: updatedUserProfile.userEmailAddress },
        { $push: { objEveningRoutineLog: updatedUserProfile.objEveningRoutineLog} }
      ).then(result => {
        res.status(201).json({
            data: updatedUserProfile,
            url: `/addProductEvening/${updatedUserProfile._id}`
        });
    }).catch(error => res.status(500).send(error));
};


exports.deleteProductEvening = (req, res) => {

   
    const userEmailAddress =  req.body.userEmailAddress;
    const _productName = req.body.productName;
      
  
    userProfile.findOneAndUpdate(
        { userEmailAddress: userEmailAddress },
        { $pull: { objEveningRoutineLog: {
            productName: _productName
          }} }
      ).then(result => {
        res.status(201).json({
            data: _productName,
            url: `/deleteProductEvening/${_productName}`
        });
    }).catch(error => res.status(500).send(error));
};


exports.deleteProductMorning = (req, res) => {

   
    const userEmailAddress =  req.body.userEmailAddress;
    const _productName = req.body.productName;
      
  
    userProfile.findOneAndUpdate(
        { userEmailAddress: userEmailAddress },
        { $pull: { objMorningRoutineLog: {
            productName: _productName
          }} }
      ).then(result => {
        res.status(201).json({
            data: _productName,
            url: `/deleteProductMorning/${_productName}`
        });
    }).catch(error => res.status(500).send(error));
};