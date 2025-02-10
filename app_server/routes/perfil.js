const express = require('express');
const router = express.Router();
const ctrlPerfil = require('../controllers/perfil');

/* GET home page. */
router.get('/', ctrlPerfil.perfil);


module.exports = router;