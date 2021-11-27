const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors({
    origin: ['http://localhost:3000', 'https://bureauofskincarebos.netlify.app', 'https://bureauofskincare.ca']
}));

require("dotenv").config();
//const cookieParser = require("cookie-parser");
const connected = require("./Backend/connection.js");
const PORT = process.env.PORT || 8080;



//app.use(cookieParser);
app.use(morgan('tiny'));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000
}));
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