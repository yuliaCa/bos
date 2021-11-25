const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
require("dotenv").config();


let mongoDB = `mongodb+srv://msuria00:e57hEbZDrhhY3Wfj@cluster0.6v3kl.mongodb.net/bosDB?retryWrites=true&w=majority`;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected to Atlas!");
});

module.exports = mongoose.connection;