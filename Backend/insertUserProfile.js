const connection = require("./connection.js");
const UserProfile = require("./models/userProfileSchema.js");


connection.on('open', () => {

    console.log("Connected");

    let newUserProfile = new UserProfile({

        fullname: req.body.fullname,
        emailAddress: req.body.emailAddress,
        cityLocation: req.body.cityLocation,
        gender: req.body.gender,
        skintype: req.body.skintype,
        concerns: req.body.concerns

    });

    const saveDocument = async userProfileDocument => {
        await userProfileDocument.save();
        console.log("User has been added.");

    }

    saveDocument(newUserProfile)
        .catch(error => console.log(error))
        .finally(() => process.exit());

});
