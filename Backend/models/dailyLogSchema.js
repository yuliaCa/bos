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
    objRoutineLog: [productSubSchema],
    overallRate: {type: Number, default: 0} // integer 1=unhappy, 2=moderate, 3=happy
});

// .model('name of the model', schemaName, 'Mongoose collection name')
const dailyLog = mongoose.model('dailyLogs', dailyLogSchema, 'dailyLogs');

module.exports = dailyLog;