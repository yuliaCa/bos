exports.getUserProfiles = (req, res) => {
    res.send(req.app.locals.data.userProfile);
};