const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//modelo
//require ('./app_server/models/db');

//Routers
//const indexRouter = require('./app_server/routes/index');
const homeRouter = require('./app_server/routes/home');
const productosRouter= require('./app_server/routes/productos');
const detalleRouter= require('./app_server/routes/detalle');
const carritoRouter= require('./app_server/routes/carrito');
const perfilRouter= require('./app_server/routes/perfil');
const signinRouter= require('./app_server/routes/signin');
const loginRouter= require('./app_server/routes/login');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server','views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//cuando usar los routers
//app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/home', homeRouter);
app.use('/productos', productosRouter);
app.use('/detalle', detalleRouter);
app.use('/carrito', carritoRouter);
app.use('/perfil', perfilRouter);
app.use('/signin', signinRouter);
app.use('/login', loginRouter);

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

app.get('/', (req, res) => {
  res.send('Servidor funcionando en Heroku 🚀');
});
module.exports = app;
