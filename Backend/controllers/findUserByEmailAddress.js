const connection = require("../connection.js");
const UserProfile = require("../models/userProfileSchema.js");


connection.on('open', () => {

    console.log("Connected");

    let EmailAddress = process.argv[2];

    const loadDocument = async EmailAddress => {
        const result = await UserProfile.find({ emailAddress: EmailAddress.toLowerCase() }).exec();

        if (result == "") {
            console.log("no record");
        } else {
            console.log("fetched: ", result);
        }


    }

    loadDocument(EmailAddress)
        .catch(error => console.log(error));
    //.finally(() => process.exit());

});