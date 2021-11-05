const Products = require("../models/productSchema.js");

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



exports.postNewProduct = (req, res) => {


    let newProduct = new Products({
        productName: req.body.productName,
        images: req.body.images,
        brandName: req.body.brandName,
        description: req.body.description,
        category: req.body.category,
        ingredients: req.body.ingredients
    });

    newProduct.save().then(result => {
        res.status(201).json({
            data: newProduct,
            url: `/product/${newProduct._id}`
        });
    })
        .catch(error => res.status(500).send(error));


};