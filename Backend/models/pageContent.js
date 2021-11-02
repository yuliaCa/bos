const mongoose = require("mongoose");
const dbSchema = mongoose.Schema;



const pagesContentSchema = new dbSchema({
    header: { type: String, required: true },
    body: { type: String },
    imagelink: { type: String }
});

// .model('name of the model', schemaName, 'Mongoose collection name')
const pageContents= mongoose.model('pagesContent', pagesContentSchema, 'pagesContent');

module.exports = pageContents;