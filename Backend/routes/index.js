const express = require('express');
const router = express.Router();

const userProfileRouter = require("./userProfile.js");
const productRouter = require("./product.js");
const dailyLogRouter = require("./dailyLog.js");

router.use("/profile", userProfileRouter);
router.use(productRouter);
router.use(userProfileRouter);

module.exports = router;