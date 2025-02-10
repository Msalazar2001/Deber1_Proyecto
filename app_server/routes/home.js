var express = require('express');
var router = express.Router();
const ctrlHome = require('../controllers/home');

/* GET users listing. */
router.get('/', ctrlHome.home );

module.exports = router;
