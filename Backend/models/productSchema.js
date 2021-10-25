const mongoose = require("mongoose");
const dbSchema = mongoose.Schema;



const productSchema = new dbSchema({
    //_id: ObjectId auto generate
    productName: { type: String, required: true },
    images: { type: [String] },
    brandName: { type: String },
    description: { type: String },
    category: { type: String }
});

// .model('name of the model', schemaName, 'Mongoose collection name')
const product = mongoose.model('products', productSchema, 'products');

module.exports = product;