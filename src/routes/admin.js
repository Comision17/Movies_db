var express = require('express');
var router = express.Router();

const {list,crear,editar,eliminar,store,update } = require('../controllers/adminController')

/* GET home page. */
router.get('/listar',list)

router.get('/create', crear);
router.post('/create', store);

router.get('/edit/:id', editar);
router.post('/edit/:id', update);

router.post('/destroy/:id', eliminar);

module.exports = router;
