const mongoose = require("mongoose");

const dbSchema = mongoose.Schema;

let concernsSchema = new dbSchema({
    acne: {type: Boolean},
    dryness: {type: Boolean},
    oilyness: {type: Boolean},
    blemishes: {type: Boolean},
    "dark spots": {type: Boolean},
    "fine lines": {type: Boolean},
    "red lines": {type: Boolean},
    pores: {type: Boolean}
});

let skintypeSchema = new dbSchema({
    dry: {type: Boolean},
    normal: {type: Boolean},
    combination: {type: Boolean},
    sensitive: {type: Boolean} 
});

let userProfileSchema = new dbSchema({
    fullname: { type: String, required: true, maxLength: 30},
    emailAddress: { type: String, lowercase: true, required: true},
    cityLocation: { type: String, required: true, maxLength: 15},
    skintype: {skintypeSchema},
    concerns: {concernsSchema},
    gender: { type: String, default: "other"}
    //birthDate: { type: dbSchema.Types.Date }
});

// .model('name of the model', schemaName, 'Mongoose collection name')
const UserProfile = mongoose.model('userProfile', userProfileSchema, 'userProfile');

module.exports = UserProfile;