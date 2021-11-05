const mongoose = require("mongoose");
const dbSchema = mongoose.Schema;



const productSchema = new dbSchema({
    productName: { type: String, required: true },
    images: { type: [String] },
    brandName: { type: String },
    description: { type: String },
    category: { type: String },
    ingredients: { type: String },

});

// .model('name of the model', schemaName, 'Mongoose collection name')
const product = mongoose.model('products', productSchema, 'products');

module.exports = product;