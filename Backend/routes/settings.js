const router = require("express").Router({mergeParams:true});
const patchSettings = require("../controllers/settingsControllers.js");

// Update profile with settings

router.patch("/:userEmail", patchSettings);

module.exports = router;