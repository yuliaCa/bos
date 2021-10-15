const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const schemas = require("./schema.js");
//require("dotenv").config();

let mongoDB = `mongodb+srv://bosadmin:WtfqXj6G0MY@cluster0.6v3kl.mongodb.net/bosDB?retryWrites=true&w=majority`;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected to Atlas!");
    const server = app.listen(8080, () => console.log("Listening"));
});




let saveDocument = (collection, document) => {

    let dbcollection = new schemas.userProfile(document);
    let successMsg = "";

    switch (collection) {
        case "profile":
            dbcollection = new schemas.userProfile(document);
            successMsg = "New user has been added.";

            break;
        case "dailylog":
            dbcollection = new schemas.dailyLogs(document);
            successMsg = "New log has been added.";
            break;
        default:
            dbcollection = new schemas.products(document);
            successMsg = "New product has been added.";
    }

    try {
        dbcollection.save(async(err, queryResult) => {
            console.log(successMsg);
            return successMsg;
        });
    } catch (err) {
        console.log(err);
        return err;
    }
};


let getUserbyEmail = (userEmail) => {
    const document = schemas.userProfile.find({ emailAddress: userEmail.toLowerCase() }, (err, document_data) => {
        if (err) throw err;
        if (document_data) {
            return document_data;
        } else {
            return err;
        }
    })
}

let getUserDailyLogsByEmail = (userEmail) => {
    //const productName = await product.find({}).populate("user").exec((err,document_data) => {; //IF TWO COLLECTIONS ARE INVOLVED

    const document = schemas.dailyLogs.find({ userEmailAddress: userEmail.toLowerCase() }, (err, document_data) => {
        if (err) throw err;
        if (document_data) {
            return document_data;
        } else {
            return err;
        }
    })
}

let getProductByProductName = (productName) => {
    const document = schemas.products.find({ productName: "/" + productName + "/i" }, (err, document_data) => {
        if (err) throw err;
        if (document_data) {
            return document_data;
        } else {
            return err;
        }
    })
}


let addProductInMorningRoutineByProductName = (userEmailAddress, _productName) => {

}

let addProductInEveningRoutineByProductName = (userEmailAddress, _productName) => {

}

let deleteProductInMorningRoutineByProductId = (userEmailAddress, _productId) => {

}

let deleteProductInEvenigRoutineByProductId = (userEmailAddress, _productId) => {

}