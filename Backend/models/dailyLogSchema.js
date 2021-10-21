const mongoose = require("mongoose");
const dbSchema = mongoose.Schema;



const productSubSchema = new dbSchema({
    productName: { type: String, required: true },
    description: { type: String },
    category: { type: String }
});

const dailyLogSchema = new dbSchema({
    //_id: ObjectId auto generate
    userEmailAddress: { type: String, lowercase: true, required: true },
    objMorningRoutineLog: [productSubSchema]
        // objEveningRoutineLog: { type: dbSchema.Types.DocumentArray }
});

// .model('name of the model', schemaName, 'Mongoose collection name')
const dailyLog = mongoose.model('dailyLogs', dailyLogSchema, 'dailyLogs');

module.exports = dailyLog;