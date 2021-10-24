const express = require('express');
const router = express.Router();

const { getUserProfile, getUserProfileById } = require("../controllers/userProfileControllers.js")

//user profile routes
router
    .get("/", getUserProfile)
    .get("/:id", getUserProfileById);
//res.send(req.app.locals.data.userProfile[req.params.id]);
module.exports = router;