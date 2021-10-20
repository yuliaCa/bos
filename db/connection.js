const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
//require("dotenv").config();

let mongoDB = `mongodb+srv://bosadmin:WtfqXj6G0MY@cluster0.6v3kl.mongodb.net/bosDB?retryWrites=true&w=majority`;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    //console.log("Connected to Atlas!");
    // const server = app.listen(8080, () => console.log("Listening"));
});

module.exports = mongoose.connection;