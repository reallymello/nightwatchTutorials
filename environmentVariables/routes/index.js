var express = require('express');
var router = express.Router();
const login = require('../controllers/loginController');
const profile = require('../controllers/profileController');

router.get('/', login.home);
router.get('/profile', profile.home);
router.post('/', login.authenticate);

module.exports = router;
