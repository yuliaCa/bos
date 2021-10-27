const router = require('express').Router({ mergeParams: true });

const userProfileRouter = require("./userProfile.js");
const productRouter = require("./product.js");
const dailyLogRouter = require("./dailyLog.js");

router.use("/profile", userProfileRouter);
router.use("/profile", productRouter);
router.use("/register", userProfileRouter);
router.use("/myroutine", productRouter);
router.use("/myroutine", dailyLogRouter);

module.exports = router;