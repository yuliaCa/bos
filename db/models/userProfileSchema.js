const mongoose = require("mongoose");
const dbSchema = mongoose.Schema;

let userProfileSchema = new dbSchema({
    emailAddress: { type: String, lowercase: true, required: true },
    fullname: { type: String, required: true }
    //gender: { type: String },
    //birthDate: { type: dbSchema.Types.Date }
});

// .model('name of the model', schemaName, 'Mongoose collection name')
const userProfile = mongoose.model('userProfile', userProfileSchema, 'userProfile');

module.exports = userProfile;