const Settings = require("../models/settingsSchema.js");

// Settings Page: Update Profile Controller

const patchSettings = (req, res) => {
  Settings
  .findOneAndUpdate(
    { userEmailAddress: updatedUserProfile.userEmailAddress },
    { new: true }
  )
  .then(result => {
    res.status(201).json({
        data: updatedUserProfile,
        url: `/addProductMorning/${updatedUserProfile._id}`
    });
  })
  .catch(error => res.status(500).send(error));

module.exports = patchControllers;