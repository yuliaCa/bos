const router = require("express").Router({mergeParams:true});
const {
  getAllMissionContent,
  getMissionContent,
  postMissionContent,
  deleteMissionContent,
} = require("../controllers/missionControllers.js");

// Team Page: Mission Content 

router.get("/", getAllMissionContent);
router.get("/:id", getMissionContent);
router.post("/", postMissionContent);
router.delete("/:id", deleteMissionContent)

module.exports = router;