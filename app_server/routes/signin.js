var express = require('express');
var router = express.Router();
const ctrlSignin = require('../controllers/signin');

/* GET users listing. */
router.get('/', ctrlSignin.signin );

module.exports = router;