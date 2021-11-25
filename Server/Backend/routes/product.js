const router = require('express').Router({ mergeParams: true });

const { getProductsByCategory, getProductByName, getProducts, postNewProduct } = require("../controllers/productControllers.js");

router
    .get("/:productName", getProductByName)
    .get("/", getProducts)
    .get("/:productCategory", getProductsByCategory)
    .post("/:userEmail", postNewProduct);

module.exports = router;