const router = require('express').Router({mergeParams:true});

const userProfileRouter = require('./userProfile.js');


router.use('/', userProfileRouter);

module.exports = router;