const connection = require("../connection.js");
const product = require("../models/productSchema.js");


connection.on('open', () => {

    console.log("Connected");

    let newProduct = new product({
        productName: "NEW ADDED PRODUCT NAME",
        description: "DESCRIPTION OF THE PRODUCT",
        category: "CATEGORY WWWWE"
    });

    const saveDocument = async productDocument => {
        await productDocument.save();
        console.log("product has been added.");

        const result = await product.find({}).exec();

        console.log("fetched: ", result);


    }

    saveDocument(newProduct)
        .catch(error => console.log(error));
    //.finally(() => process.exit());

});