const validator = require('../validationMiddleware');
const express = require('express');
const router = express.Router();

const { getUserProfile, getUserProfileByEmail, postNewUserProfile, putNewProductMorning, putNewProductEvening, deleteProductEvening,deleteProductMorning } = require("../controllers/userProfileControllers.js")

//user profile routes
router
    .get("/", getUserProfile)
    .get("/:id", getUserProfileByEmail)
    .put("/addProductMorning/:userEmail", putNewProductMorning)
    .put("/addProductEvening/:userEmail", putNewProductEvening)
    .delete("/deleteProductEvening/:userEmail", deleteProductEvening)
    .delete("/deleteProductMorning/:userEmail", deleteProductMorning)
    .post("/", validator.registration, postNewUserProfile);

module.exports = router;