var express = require('express');
var router = express.Router();

const {elementos} = require('../controllers/actoresController')

/* GET home page. */
router.get('/', elementos);


module.exports = router;
