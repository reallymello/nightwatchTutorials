var express = require('express');
var router = express.Router();
const calcControllers = require('../controllers/calctroller');

router.get('/', calcControllers.home);
router.post('/', calcControllers.calculate);

module.exports = router;
