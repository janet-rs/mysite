var express = require('express');
var router = express.Router();

/* RUTA */
router.get('/', function(req, res, next) {
  res.render('acercade',{page:'Acercade', menuId:'acercade' });
});

module.exports = router;
