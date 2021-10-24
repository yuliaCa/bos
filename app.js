const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser);
app.use(express.json());
const connected = require("./Backend/connection.js");


connected.on('open', () => {
    console.log("Connected to Atlas!");
    const server = app.listen(8080, () => console.log("Listening"));
});


////////////////////////////Route////////////////////////////
app.locals.data = require("./data.json");
const router = require("./Backend/routes/index.js");
app.use("/api", router);
/////////////////////////////////////////////////////////////


////////////////////////////Controller///////////////////////
/////////////////////////////////////////////////////////////