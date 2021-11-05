const AdviceContent = require("../models/adviceContentSchema.js");

// Team Page: Advice Content Controllers

const postAdviceContent = (req, res) => {
  let newAdviceContent = new AdviceContent({
    _02d: req.body._02d,
    _03d: req.body._03d,
    _01d: req.body._01d,
    _04d: req.body._04d,
    _09d: req.body._09d,
    _10d: req.body._10d,
    _11d: req.body._11d,
    _01n: req.body._01n,
    _02n: req.body._02n,
    _03n: req.body._03n,
    _04n: req.body._04n,
    _09n: req.body._09n,
    _10n: req.body._10n,
    _11n: req.body._11n,
    _13d: req.body._13d,
    _13n: req.body._13n,
    _50d: req.body._50d,
    _50n: req.body._50n,
  });

  newAdviceContent
    .save()
    .then((result) => {
      res.set("content-location", `/advicecontent/${newAdviceContent._id}`);
      res.status(201).json({
        data: newAdviceContent,
        url: `/advicecontent/${newAdviceContent._id}`,
      });
    })
    .catch((error) => res.status(400).send(error));
};

const getAllAdviceContent = (req, res) => {
  AdviceContent.find({})
    .exec()
    .then((results) => {
      res.json({
        data: results,
        _links: {
          self: { href: `/advicecontent` },
          "/advicecontent/:_id": {
            href: `/advicecontent/6181bfbe9a77309f13ba20fb`,
          },
        },
      });
    })
    .catch((error) => res.status(404).send(error));
};

const getAdviceContent = (req, res) => {
  AdviceContent.findOne({ _id: req.params.id })
    .exec()
    .then((results) => {
      res.json({
        data: results,
        _links: {
          self: { href: `/advicecontent/${req.params.id}` },
          "all-locations": {
            href: `/advicecontent`,
          },
        },
      });
    })
    .catch((error) => res.status(404).json(error));
};

const deleteAdviceContent = (req, res) => {
  AdviceContent.findOne({ _id: req.params.id })
    .delete()
    .then((results) => {
      res.json({
        data: results,
        _links: {
          "all-locations": {
            href: `/advicecontent`,
          },
        },
      });
    })
    .catch((error) => res.status(405).json(error));
};

module.exports = {
  postAdviceContent,
  getAdviceContent,
  getAllAdviceContent,
  deleteAdviceContent,
};
