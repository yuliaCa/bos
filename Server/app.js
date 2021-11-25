const express = require("express");
const app = express();
const morgan = require('morgan');
require("dotenv").config();
//const cookieParser = require("cookie-parser");
const connected = require("./Backend/connection.js");
const PORT = process.env.PORT || 8080;



//app.use(cookieParser);
app.use(express.json());
app.use(morgan('tiny'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/test', (req, res) => {
    const message = {
        message: 'Welcome to BOS server.'
    };
    res.json(message);
})

////////////////////////////Route////////////////////////////
const router = require("./Backend/routes/index.js");
app.use("/", router);
/////////////////////////////////////////////////////////////

connected.on('open', () => {
    app.listen(PORT, () => console.log(`Server is starting at ${PORT}`));
});