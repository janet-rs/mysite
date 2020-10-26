var express = require('express');
var router = express.Router();
var nombre =['Dulce', 'Kary','Brayan','Alejandro','Omar','Lendy','Benja','Mariana','Bibi','Andy'];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{page:'Home', menuId:'home' });
});

/* Ruta nueva al Ubicación

router.get('/ubicacion', function(req, res, next) {​​
  res.render('pages/ubicacion', {​​ page: 'Ubicación', menuId: 'Ubicacion' }​​);
}​​);*/

/* Método POST */
router.post('/', function(req, res) {
  res.send('Tengo una petición POST');
});
/* Método PUT */
router.put('/', function(req, res) {
  res.send('Te doy un saludo con Greeting');
});
/* Método DELETE */
router.delete('/', function(req, res) {
  res.send('Te doy un saludo con DELETE');
});

//LOGIN
/*$(document).ready(function(){
  $('.log-btn').click(function(){
      $('.log-status').addClass('wrong-entry');
     $('.alert').fadeIn(500);
     setTimeout( "$('.alert').fadeOut(1500);",3000 );
  });
  $('.form-control').keypress(function(){
      $('.log-status').removeClass('wrong-entry');
  });

});*/
module.exports = router;
