const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
app.use(cookieParser);
app.use(express.json());

mongoose.connect(
  "mongodb+srv://javiergongora:DBatlass7769@cluster0.6v3kl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  () => {
    console.log("Successfully connected to Atlas database");
  }
);

const server = app.listen(process.env.PORT || 8080, () =>
  console.log(`Express server started, listening port ${process.env.PORT || 8080}`)
);
