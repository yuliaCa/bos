const router = require('express').Router({ mergeParams: true });

const { getDailyLogByUserEmail, postDailyLogByDay } = require("../controllers/dailyLogControllers");

router
    .get("/:userEmail", getDailyLogByUserEmail)
    .post("/:userEmail", postDailyLogByDay);

module.exports = router;