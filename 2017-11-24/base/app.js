var express = require('express');
var path = require('path');  //引入处理路径的path模块
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const hbs = require('hbs');

var index = require('./routes/index'); 
var users = require('./routes/users');
var good = require('./routes/good.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));   //设置视图模板存放的目录
app.set('view engine', 'html');  //设置视图引擎为html文件
app.engine('html',hbs.__express);   //设置html 文件使用hbs的模板

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', index);
app.use('/users', users);
app.use('/good',good);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
