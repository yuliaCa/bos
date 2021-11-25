
const PageContent = require("../models/featuresSchema.js");

exports.getPageContents = (req, res) => {
    //req.params.userEmail
    PageContent.find({}).exec()
        .then(results => {
            res.status(200).json(results);
        })
        .catch(error => res.status(500).send(error));
};


exports.postPageContent = (req, res) => {

    let newPageContent = new PageContent({
        header: req.body.header,
        body: req.body.body,
        imagelink:  req.body.imagelink
    });

    newPageContent.save().then(result => {
            res.status(201).json({
                data:  newPageContent,
                url: `/pageContent/${newPageContent._id}`
            });
        })
        .catch(error => res.status(500).send(error));
};


exports.updatePageContent = (req, res) => {

    let updatedPageContent = new PageContent({
        header: req.body.header,
        body: req.body.body,
        imagelink:  req.body.imagelink
    });

  updatedPageContent.findOneAndUpdate({ header: header },{ body: body, imagelink: imagelink}, {
    new: true,
    upsert: true // Make this update into an upsert
  }).then(result => {
            res.status(201).json({
                data: updatedPageContent ,
                url: `/pagecontent/${updatedPageContent._id}`
            });
        })
        .catch(error => res.status(500).send(error));
};

exports.deletePageContent = (req, res) => {

    let deletePageContent = new PageContent({
        header: req.body.header
    });

    deletePageContent.find({"header":header}).remove.then(result => {
            res.status(201).json({
           
            });
        })
        .catch(error => res.status(500).send(error));
};