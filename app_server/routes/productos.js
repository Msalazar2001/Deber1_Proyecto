var express = require('express');
var router = express.Router();
const ctrlProductos = require('../controllers/productos');

/* GET users listing. */
router.get('/', ctrlProductos.productos );

module.exports = router;
