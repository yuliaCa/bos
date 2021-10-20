const connection = require("./connection.js");
const UserProfile = require("./models/userProfileSchema.js");


connection.on('open', () => {

    console.log("Connected");

    let newUserProfile = new UserProfile({

        emailAddress: process.argv[2],
        fullname: process.argv[3]
            //gender: process.argv[4],
            //birthDate: process.argv[5]

    });

    const saveDocument = async userProfileDocument => {
        await userProfileDocument.save();
        console.log("User has been added.");

    }

    saveDocument(newUserProfile)
        .catch(error => console.log(error))
        .finally(() => process.exit());

});