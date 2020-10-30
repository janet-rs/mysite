var express = require('express');
var router = express.Router();

/* RUTA */
router.get('/', function(req, res, next) {
    res.render('ubicacion',{page:'Ubicación', menuId:'ubicacion' });
  });
module.exports = router;



