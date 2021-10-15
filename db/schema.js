const mongoose = require("mongoose");
const dbSchema = mongoose.Schema;

const userProfileSchema = new dbSchema({
    emailAddress: { type: String, lowercase: true },
    fullname: { type: String },
    gender: { type: String },
    birthDate: { type: dbSchema.Types.Date }
});

const dailyLogSchema = new dbSchema({
    //_id: ObjectId auto generate
    userEmailAddress: { type: dbSchema.Types.ObjectId, ref: 'userProfile' }
    // objMorningRoutineLog: { type: dbSchema.Types.DocumentArray },
    // objEveningRoutineLog: { type: dbSchema.Types.DocumentArray }
});

const productSchema = new dbSchema({
    //_id: ObjectId auto generate
    productName: { type: String },
    productDescription: { type: String },
    productCategory: { type: String }
    // objMorningRoutineLog: { type: dbSchema.Types.DocumentArray },
    // objEveningRoutineLog: { type: dbSchema.Types.DocumentArray }
});

const userProfile = mongoose.model('userProfile', userProfileSchema, 'userProfile');
const dailyLog = mongoose.model('dailyLogs', dailyLogSchema, 'dailyLogs');
const products = mongoose.model('products', productSchema, 'products');

const skinTrackerSchemas = { 'userProfile': userProfile, 'dailyLogs': dailyLog, 'products': products };

module.exports = skinTrackerSchemas;