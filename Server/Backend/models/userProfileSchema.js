const mongoose = require("mongoose");
const dbSchema = mongoose.Schema;


const productSubSchema = new dbSchema({
    productName: { type: String },
    images: { type: [String] },
    brandName: { type: String },
    description: { type: String },
    category: { type: String },
    suggestedUsage: { type: String }
});


const skintypeSubSchema = new dbSchema({
    dry: { type: Boolean, default: false },
    normal: { type: Boolean, default: false },
    combination: { type: Boolean, default: false },
    sensitive: { type: Boolean, default: false }
});

const concernsSubSchema = new dbSchema({
    acne: { type: Boolean, default: false },
    dryness: { type: Boolean, default: false },
    oilyness: { type: Boolean, default: false },
    blemishes: { type: Boolean, default: false },
    dark_spots: { type: Boolean, default: false },
    pores: { type: Boolean, default: false },
    red_lines: { type: Boolean, default: false },
    fine_lines: { type: Boolean, default: false }
});

const imageSchema = new dbSchema({
    file: { type: String, default: "" },
    base64URL: { type: String, default: "" }
})

let userProfileSchema = new dbSchema({
    userEmailAddress: { type: String, required: true },
    fullname: { type: String, required: true },
    gender: { type: String },
    cityLocation: { type: String },
    skintype: skintypeSubSchema,
    image: imageSchema,
    concerns: concernsSubSchema,
    birthDate: { type: Date, default: Date.now },
    objMorningRoutineLog: [productSubSchema],
    objEveningRoutineLog: [productSubSchema]

});

// .model('name of the model', schemaName, 'Mongoose collection name')
const userProfile = mongoose.model('userProfile', userProfileSchema, 'userProfile');

module.exports = userProfile;