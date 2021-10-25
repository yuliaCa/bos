// const validator = require('../validationMiddleware');

const router = require('express').Router({mergeParams:true});

const { postProfile } = require('../controllers/userprofileControllers.js')

// router.get('/profile/:id', getProfile);
// router.get('/profiles/', getProfiles);
router.route('/register').post(postProfile);

module.exports = router;