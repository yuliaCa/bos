const connection = require("./connection.js");
const product = require("./models/productSchema.js");


connection.on('open', () => {

    console.log("Connected");

    let ProductName = process.argv[2];

    const loadDocument = async ProductName => {

        const result = await product.find({ productName: { '$regex': ProductName, $options: 'i' } }).exec();

        if (result == "") {
            console.log("no record");
        } else {
            console.log("fetched: ", result);
        }

    }

    loadDocument(ProductName)
        .catch(error => console.log(error))
        .finally(() => process.exit());

});