var express = require('express');
var router = express.Router();

const { index, peliculaEspecifica,peliculaPorId,indexAsincronico} = require('../controllers/indexController')

/* GET home page. */
router.get('/', index);
router.get('/asincrono', indexAsincronico);
router.get('/:nombre', peliculaEspecifica);
router.get('/title/:id', peliculaPorId);

module.exports = router;
