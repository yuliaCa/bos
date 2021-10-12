const mongoose = require("mongoose");
require("dotenv").config();

// let mongoDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;
let mongoDB = `mongodb+srv://bosadmin:WtfqXj6G0MY@cluster0.6v3kl.mongodb.net/bosDB?retryWrites=true&w=majority`;

module.exports = mongoose.connect(mongoDB);
