const userProfile = require("../models/userProfileSchema");

// Settings Page: Update Profile Controller

const patchSettings = (req, res) => {
  userProfile.findOneAndUpdate(
    { userEmailAddress: updatedUserProfile.userEmailAddress },
    { new: true }
  )
    .then((result) => {
      res.status(201).json({
        data: updatedUserProfile,
        url: `/addProductMorning/${updatedUserProfile._id}`,
      });
    })
    .catch((error) => res.status(500).send(error));
};

module.exports = patchSettings;
