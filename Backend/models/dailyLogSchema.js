const mongoose = require("mongoose");
const dbSchema = mongoose.Schema;

const productSubSchema = new dbSchema({
    productName: { type: String},
    images: { type: [String] },
    brandName: { type: String },
    description: { type: String },
    category: { type: String }
});

const dailyLogSchema = new dbSchema({
    userEmailAddress: { type: String, required: true },
    dailyLogDate: { type: Date, default: Date.now },
    objMorningRoutineLog: [productSubSchema],
    objEveningRoutineLog: [productSubSchema]
});

// .model('name of the model', schemaName, 'Mongoose collection name')
const dailyLog = mongoose.model('dailyLogs', dailyLogSchema, 'dailyLogs');

module.exports = dailyLog;