const validator = require('../validationMiddleware');
const express = require('express');
const router = express.Router();

const { getUserProfile, getUserProfileByEmail, postNewUserProfile } = require("../controllers/userProfileControllers.js")

//user profile routes
router
    .get("/", getUserProfile)
    .get("/:id", getUserProfileByEmail)
    // .post("/", validator.registration, postNewUserProfile);
    .post("/", postNewUserProfile)
//res.send(req.app.locals.data.userProfile[req.params.id]);
module.exports = router;