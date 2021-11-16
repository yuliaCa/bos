const TeamContent = require("../models/teamContentSchema.js");

// Team Page: Team Content Controllers

const postTeamContent = (req, res) => {
  let newTeamContent = new TeamContent({
    header: req.body.header,
    bodytext: req.body.bodytext,
  });

  newTeamContent
    .save()
    .then((result) => {
      res.set("content-location", `/teamcontent/${newTeamContent._id}`);
      res.status(201).json({
        data: newTeamContent,
        url: `/teamcontent/${newTeamContent._id}`,
      });
    })
    .catch((error) => res.status(400).send(error));
};

const getAllTeamContent = (req, res) => {
  TeamContent.find({})
    .exec()
    .then((results) => {
      res.json({
        data: results,
        _links: {
          self: { href: `/teamcontent` },
          "/teamcontent/:_id": {
            href: `/Teamcontent/6181bfbe9a77309f13ba20fb`,
          },
        },
      });
    })
    .catch((error) => res.status(404).send(error));
};

const getTeamContent = (req, res) => {
  TeamContent.findOne({ _id: req.params.id })
    .exec()
    .then((results) => {
      res.json({
        data: results,
        _links: {
          self: { href: `/teamcontent/${req.params.id}` },
          "all-locations": {
            href: `/teamcontent`,
          },
        },
      });
    })
    .catch((error) => res.status(404).json(error));
};

const deleteTeamContent = (req, res) => {
  TeamContent.findOne({ _id: req.params.id })
    .delete()
    .then((results) => {
      res.json({
        data: results,
        _links: {
          "all-locations": {
            href: `/teamcontent`,
          },
        },
      });
    })
    .catch((error) => res.status(405).json(error));
};

module.exports = {
  postTeamContent,
  getTeamContent,
  getAllTeamContent,
  deleteTeamContent,
};
