const validator = require('../validationMiddleware');
const express = require('express');
const router = express.Router();

const {
    getUserProfile,
    getUserProfileByEmail,
    postNewUserProfile,
    putNewProductMorning,
    putNewProductEvening,
    deleteProductEvening,
    deleteProductMorning,
    getUserMorningRoutine,
    getUserEveningRoutine,
    uploadPhoto,
    updateUserProfile
} = require("../controllers/userProfileControllers.js")

//user profile routes
router
    .get("/", getUserProfile)
    .get("/:id", getUserProfileByEmail)
    .get("/:userEmail/eveningProducts", getUserEveningRoutine)
    .get("/:userEmail/morningProducts", getUserMorningRoutine)
    .put("/addProductMorning/:userEmail", putNewProductMorning)
    .put("/addProductEvening/:userEmail", putNewProductEvening)
    .patch("/addProfileImage/:userEmail", uploadPhoto)
    .put("/updateUserProfile/:userEmail", updateUserProfile)
    .delete("/deleteProductEvening/:userEmail/:productName", deleteProductEvening)
    .delete("/deleteProductMorning/:userEmail/:productName", deleteProductMorning)
    .post("/", validator.registration, postNewUserProfile);

module.exports = router;