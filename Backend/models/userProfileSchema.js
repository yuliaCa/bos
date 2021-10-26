const mongoose = require("mongoose");
const dbSchema = mongoose.Schema;


const productSubSchema = new dbSchema({
    productName: { type: String, required: true },
    images: { type: [String] },
    brandName: { type: String },
    description: { type: String },
    category: { type: String }
});


let userProfileSchema = new dbSchema({
    emailAddress: { type: String, lowercase: true, required: true },
    fullname: { type: String, required: true },
    gender: { type: String },
    birthDate: { type: Date, default: Date.now },
    objMorningRoutineLog: [productSubSchema],
    objEveningRoutineLog: [productSubSchema],
});

// .model('name of the model', schemaName, 'Mongoose collection name')
const userProfile = mongoose.model('userProfile', userProfileSchema, 'userProfile');

module.exports = userProfile;