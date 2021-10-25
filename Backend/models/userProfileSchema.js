const mongoose = require("mongoose");
const dbSchema = mongoose.Schema;


const productSubSchema = new dbSchema({
    productName: { type: String, required: true },
    description: { type: String },
    category: { type: String }
});


let userProfileSchema = new dbSchema({
    emailAddress: { type: String, lowercase: true, required: true },
    fullname: { type: String, required: true },
    gender: { type: String },
    birthDate: { type: Date, default: Date.now }
});

// .model('name of the model', schemaName, 'Mongoose collection name')
const userProfile = mongoose.model('userProfile', userProfileSchema, 'userProfile');

module.exports = userProfile;