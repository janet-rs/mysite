var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var InitiateMongoServer = require("./config/db"); //<---'
var bodyParser = require ('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var acercadeRouter = require('./routes/acercade');
var ubicacionRouter = require('./routes/ubicacion');
var streamingRouter = require('./routes/streaming');


var app = express();
//Inicializar la base de datos
InitiateMongoServer();
app.use(bodyParser.json()); // Convierte el dato a formato JSON
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', usersRouter);
app.use('/acercade', acercadeRouter);
app.use('/ubicacion',ubicacionRouter);
app.use('/streaming',streamingRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
