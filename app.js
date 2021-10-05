const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
app.use(cookieParser);
app.use(express.json());
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Successfully connected to Atlas database");
  }
);

const server = app.listen(process.env.PORT || 8080, () =>
  console.log(
    `Express server started, listening port ${process.env.PORT || 8080}`
  )
);
