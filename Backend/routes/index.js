const router = require("express").Router({ mergeParams: true });

const userProfileRouter = require("./userProfile.js");
const productRouter = require("./product.js");
const dailyLogRouter = require("./dailyLog.js");
const pageContents = require("./pageContent.js");

const missionContentRouter = require("./missionContent.js");
const teamContentRouter = require("./teamContent.js");
const adviceContentRouter = require("./adviceContent.js");
const settingsRouter = require("./settings.js");

router.use("/profile", userProfileRouter);
router.use("/products", productRouter);
router.use("/register", userProfileRouter);
router.use("/myroutine/products", productRouter);
router.use("/dailyroutine", dailyLogRouter);
router.use("/pagecontents", pageContents);

router.use("/missioncontent", missionContentRouter);
router.use("/teamcontent", teamContentRouter);
router.use("/advicecontent", adviceContentRouter);

router.use("/settings", settingsRouter);

module.exports = router;
