const router = require("express").Router({mergeParams:true});
const {
  getAllAdviceContent,
  getAdviceContent,
  postAdviceContent,
  deleteAdviceContent,
} = require("../controllers/adviceControllers.js");

// Team Page: Advice Content 

router.get("/", getAllAdviceContent);
router.get("/:id", getAdviceContent);
router.post("/", postAdviceContent);
router.delete("/:id", deleteAdviceContent)

module.exports = router;