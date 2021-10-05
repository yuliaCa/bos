const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
app.use(cookieParser);
app.use(express.json());



const server = app.listen(process.env.PORT || 8080, () =>
 console.log(`Listening port ${process.env.PORT || 8080}`)
);
