const mongoose = require("mongoose");
const dbSchema = mongoose.Schema;

let userProfileSchema = new dbSchema({
    fullname: { type: String, required: true, maxLength: 30},
    emailAddress: { type: String, lowercase: true, required: true},
    cityLocation: { type: String, required: true, maxLength: 15},
    skintype: { type: [String], default: "normal"},
    concerns: { type: [String], default: "none" },
    gender: { type: String, default: "other"}
    //birthDate: { type: dbSchema.Types.Date }
});

// .model('name of the model', schemaName, 'Mongoose collection name')
const UserProfile = mongoose.model('userProfile', userProfileSchema, 'userProfile');

module.exports = UserProfile;