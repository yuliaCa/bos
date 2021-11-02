const router = require('express').Router({ mergeParams: true });

const { getPageContents, postPageContent, updatePageContent, deletePageContent } = require("../controllers/pageContentControllers.js");

router
    .get("/", getPageContents)
    .post("/", postPageContent)
    .put("/:header", updatePageContent)
    .delete("/:header", deletePageContent);

module.exports = router;