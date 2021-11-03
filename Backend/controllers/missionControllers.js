// const MissionContent = require("../models/missionContentSchema.js");

// // Team Page: Mission Content Controllers

// const postMissionContent = (req, res) => {
//   let newMissionContent = new MissionContent({
//     header: req.body.header,
//     bodytext: req.body.bodytext,
//   });

//   newMissionContent
//     .save()
//     .then((result) => {
//       res.set("content-location", `/missioncontent/${newMissionContent._id}`);
//       res.status(201).json({
//         data: newMissionContent,
//         url: `/missioncontent/${newMissionContent._id}`,
//       });
//     })
//     .catch((error) => res.status(400).send(error));
// };

// const getAllMissionContent = (req, res) => {
//   Location.find({})
//     .exec()
//     .then((results) => {
//       res.json({
//         data: results,
//         _links: {
//           self: { href: `/missioncontent` },
//           "/missioncontent/:_id": {
//             href: `/missioncontent/6181bfbe9a77309f13ba20fb`,
//           },
//         },
//       });
//     })
//     .catch((error) => res.status(404).send(error));
// };

// const getMissionContent = (req, res) => {
//   Location.findOne({ _id: req.params.id })
//     .exec()
//     .then((results) => {
//       res.json({
//         data: results,
//         _links: {
//           self: { href: `/missioncontent/${req.params.id}` },
//           "all-locations": {
//             href: `/missioncontent`,
//           },
//         },
//       });
//     })
//     .catch((error) => res.status(404).json(error));
// };

// const deleteMissionContent = (req, res) => {
//   Location.findOne({ _id: req.params.id })
//     .delete()
//     .then((results) => {
//       res.json({
//         data: results,
//         _links: {
//           "all-locations": {
//             href: `/missioncontent`,
//           },
//         },
//       });
//     })
//     .catch((error) => res.status(405).json(error));
// };

// module.exports = {
//   postMissionContent,
//   getMissionContent,
//   getAllMissionContent,
//   deleteMissionContent,
// };
