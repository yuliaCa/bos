const validator = require('../validationMiddleware');
const express = require('express');
const router = express.Router();

const { getUserProfile, getUserProfileByEmail, postNewUserProfile, putNewProductMorning, putNewProductEvening,deleteProduct } = require("../controllers/userProfileControllers.js")

//user profile routes
router
    .get("/", getUserProfile)
    .get("/:id", getUserProfileByEmail)
    .put("/addProductMorning", putNewProductMorning)
    .put("/addProductEvening", putNewProductEvening)
    .delete("/deleteProduct", deleteProduct)
    // .post("/", validator.registration, postNewUserProfile);
    .post("/", postNewUserProfile);
//res.send(req.app.locals.data.userProfile[req.params.id]);
module.exports = router;