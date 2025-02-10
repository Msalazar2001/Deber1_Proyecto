var express = require('express');
var router = express.Router();
const ctrlCarrito = require('../controllers/carrito');

/* GET users listing. */
router.get('/', ctrlCarrito.carrito );

module.exports = router;