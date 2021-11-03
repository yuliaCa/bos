const router = require("express").Router({mergeParams:true});
const {
  getAllTeamContent,
  getTeamContent,
  postTeamContent,
  deleteTeamContent,
} = require("../controllers/teamControllers.js");

// Team Page: Team Content 

router.get("/", getAllTeamContent);
router.get("/:id", getTeamContent);
router.post("/", postTeamContent);
router.delete("/:id", deleteTeamContent)

module.exports = router;