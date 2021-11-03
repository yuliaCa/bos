const router = require("express").Router({ mergeParams: true });

const userProfileRouter = require("./userProfile.js");
const productRouter = require("./product.js");
const dailyLogRouter = require("./dailyLog.js");
const pageContents = require("./pageContent.js");

// const missionContentRouter = require("./missionContent.js")

router.use("/profile", userProfileRouter);
router.use("/products", productRouter);
router.use("/register", userProfileRouter);
router.use("/myroutine/products", productRouter);
router.use("/dailyroutine", dailyLogRouter);
router.use("/pagecontents", pageContents);

// router.use("/missioncontent", missionContentRouter);

module.exports = router;
