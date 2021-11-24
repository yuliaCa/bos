const router = require('express').Router({ mergeParams: true });

const { getPageContents, postPageContent, updatePageContent, deletePageContent } = require("../controllers/pageContentControllers.js");

router
    .get("/", getPageContents)
    .post("/", postPageContent)
    .put("/", updatePageContent)
    .delete("/", deletePageContent);

module.exports = router;