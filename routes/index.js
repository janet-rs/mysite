var express = require('express');
var router = express.Router();
var nombre =['Dulce', 'Kary','Brayan','Alejandro','Omar','Lendy','Benja','Mariana','Bibi','Andy'];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{page:'Home', menuId:'home' });
});

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
//Calendario
const fs = require ( 'fs' ); const readline = require ( 'readline' ); const { google } = require ( 'googleapis' ); // Si modifica estos ámbitos, elimine token.json. const SCOPES = [ 'https://www.googleapis.com/auth/calendar.readonly' ]; // El archivo token.json almacena los tokens de actualización y acceso del usuario, y se // crea automáticamente cuando el flujo de autorización se completa por primera // vez. const TOKEN_PATH =

 'token.json' ; // Cargue los secretos del cliente desde un archivo local. fs . readFile ( 'credentials.json' , ( err , content ) => { if ( err ) return console . log ( 'Error al cargar el archivo secreto del cliente:' , err ); // Autoriza a un cliente con credenciales, luego llama a Google Calendar API.   Autorizar ( JSON . Parse ( contenido ), listEvents ); }); / **


   
    
  




 /* Cree un cliente OAuth2 con las credenciales dadas y luego ejecute la 
 * función de devolución de llamada dada. 
 * @param {Object} credenciales Las credenciales del cliente de autorización. 
 * @param {function} callback La devolución de llamada para llamar con el cliente autorizado. 
 * / function autorizar ( credenciales , devolución de llamada ) { const { client_secret , client_id , redirect_uris } = credentials . instalado ; const oAuth2Client = new google . auth . OAuth2
 
    
   ( 
      client_id , client_secret , redirect_uris [ 0 ]); // Comprueba si hemos almacenado previamente un token.   fs . readFile ( TOKEN_PATH , ( err , token ) => { if ( err ) return getAccessToken ( oAuth2Client , callback );     oAuth2Client . setCredentials ( JSON . parse ( token ));     callback (

  
   
      

oAuth2Client ); }); } / **  * Obtenga y almacene un nuevo token después de solicitar la autorización del usuario, y luego  * ejecute la devolución de llamada dada con el cliente OAuth2 autorizado.  * @param {google.auth.OAuth2} oAuth2Client El cliente OAuth2 para el que se va a obtener el token.  * @param {getEventsCallback} devolución de llamada La devolución de llamada para el cliente autorizado.  * / function getAccessToken ( oAuth2Client , callback ) { const authUrl = oAuth2Client . generateAuthUrl ({     access_type : 'offline' ,     scope :
  








 
  
 
ALCANCE , });   consola . log ( 'Autorice esta aplicación visitando esta URL:' , authUrl ); const rl = readline . createInterface ({     entrada : proceso . stdin ,     salida : proceso . stdout , });   rl . question ( 'Ingrese el código de esa página aquí:' , ( código ) => {     rl . close ();
  

  


  
   

    oAuth2Client . getToken ( código , ( err , token ) => { if ( err ) return console . error ( 'Error al recuperar el token de acceso' , err );       oAuth2Client . setCredentials ( token ); // Almacenar el token en el disco para ejecuciones posteriores del programa       fs . writeFile ( TOKEN_PATH , JSON . stringify ( token ), (   
        

      
 err ) => { if ( err ) return consola . error ( err );         consola . log ( 'Token almacenado en' , TOKEN_PATH ); });       devolución de llamada ( oAuth2Client ); }); }); } / **  * Muestra los próximos 10 eventos en el calendario principal del usuario.  * @param {google.auth.OAuth2} auth Un cliente OAuth2 autorizado.  * / function listEvents ( auth ) { calendario constante  
          

      

    
  






 
  = google . calendario ({ versión : 'v3' , auth });   calendario . eventos . list ({     calendarId : 'primary' ,     timeMin : ( new Date ()). toISOString (),     maxResults : 10 ,     singleEvents : true ,     orderBy : 'startTime' , }, ( err , res ) => { if 

 
  
 
 
 
     
     ( err ) devuelve la consola . log ( 'La API devolvió un error:' + err ); eventos constantes = res . datos . artículos ; if ( eventos . duración ) {       consola . log ( 'Próximos 10 eventos:' );       eventos . mapa (( evento , i ) => { inicio constante = evento . inicio  
    
      

  
        . dateTime || evento . empezar . fecha ; 
        consola . log (` $ { inicio } - $ { evento . resumen }`); }); } else {       consola . log ( 'No se encontraron eventos próximos.' ); } }); } 
      
      

    
  
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
