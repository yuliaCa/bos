const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
require("dotenv").config();

let mongoDB = `mongodb+srv://bosadmin:WtfqXj6G0MY@cluster0.6v3kl.mongodb.net/bosDB?retryWrites=true&w=majority`;



module.exports = mongoose.connect(mongoDB);