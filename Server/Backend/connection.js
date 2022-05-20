const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
require("dotenv").config();


let mongoDB = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_ID_HOST}.mongodb.net/bosDB?retryWrites=true&w=majority`;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected to Atlas!");
});

module.exports = mongoose.connection;