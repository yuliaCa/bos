const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
require("dotenv").config();

let mongoDB = `mongodb+srv://marksuria:qIVtXJcJBM6xvIp5@cluster0.f8dvn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected to Atlas!");
});

module.exports = mongoose.connection;