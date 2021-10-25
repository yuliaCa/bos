const Products = require("../models/productSchema.js");


postNewProduct

exports.getProductsByCategory = (req, res) => {

    Products.find({ category: req.params.productCategory }).exec()
        .then(results => {
            res.status(200).json(results);
        })
        .catch(error => res.status(500).send(error));
};

exports.getProductByName = (req, res) => {
    Products.find({ productName: { '$regex': req.params.productName }, $options: 'i' }).exec()
        .then(results => {
            res.status(200).json(results);
        })
        .catch(error => res.status(500).send(error));
};

exports.getProducts = (req, res) => {
    Products.find({}).exec()
        .then(results => {
            res.status(200).json(results);
        })
        .catch(error => res.status(500).send(error));
};



exports.postDailyLogByDay = (req, res) => {
    DailyLog.findOne({ userEmailAddress: req.body.userEmailAddress }).exec()
        .then(results => {
            res.status(200).json(results);
        })
        .catch(error => res.status(500).send(error));
};