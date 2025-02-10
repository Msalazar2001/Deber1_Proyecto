var express = require('express');
var router = express.Router();
const ctrlDetalle = require('../controllers/detalle');

/* GET users listing. */
router.get('/', ctrlDetalle.detalle );

module.exports = router;