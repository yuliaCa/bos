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
    cityLocation: { type: String },
    dry: { type: Boolean, default: false },
    normal: { type: Boolean, default: false },
    combination: { type: Boolean, default: false },
    sensitive: { type: Boolean, default: false },
    acne: { type: Boolean, default: false },
    dryness: { type: Boolean, default: false },
    oilyness: { type: Boolean, default: false },
    blemishes: { type: Boolean, default: false },
    pores: { type: Boolean, default: false },
    birthDate: { type: Date, default: Date.now },
    objMorningRoutineLog: [productSubSchema],
    objEveningRoutineLog: [productSubSchema],
});

// .model('name of the model', schemaName, 'Mongoose collection name')
const userProfile = mongoose.model('userProfile', userProfileSchema, 'userProfile');

module.exports = userProfile;