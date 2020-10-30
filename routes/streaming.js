var express = require('express');
var router = express.Router();

/* RUTA */
router.get('/', function(req, res, next) {
    res.render('streaming',{page:'Streaming', menuId:'streaming' });
  });
module.exports = router;
