{"filter":false,"title":"app.js","tooltip":"/app.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":4},"end":{"row":0,"column":8},"action":"remove","lines":["http"]},{"start":{"row":0,"column":4},"end":{"row":0,"column":11},"action":"insert","lines":["express"]},{"start":{"row":0,"column":23},"end":{"row":4,"column":44},"action":"remove","lines":["http');","http.createServer(function (req, res) {","  res.writeHead(200, {'Content-Type': 'text/plain'});","  res.end('Hello Nath\\n');","}).listen(process.env.PORT, process.env.IP);"]},{"start":{"row":0,"column":23},"end":{"row":60,"column":0},"action":"insert","lines":["express');","var path = require('path');","var favicon = require('serve-favicon');","var logger = require('morgan');","var cookieParser = require('cookie-parser');","var bodyParser = require('body-parser');","","var routes = require('./routes/index');","var users = require('./routes/users');","","var app = express();","","// view engine setup","app.set('views', path.join(__dirname, 'views'));","app.set('view engine', 'hbs');","","// uncomment after placing your favicon in /public","//app.use(favicon(__dirname + '/public/favicon.ico'));","app.use(logger('dev'));","app.use(bodyParser.json());","app.use(bodyParser.urlencoded({ extended: false }));","app.use(cookieParser());","app.use(express.static(path.join(__dirname, 'public')));","","app.use('/', routes);","app.use('/users', users);","","// catch 404 and forward to error handler","app.use(function(req, res, next) {","    var err = new Error('Not Found');","    err.status = 404;","    next(err);","});","","// error handlers","","// development error handler","// will print stacktrace","if (app.get('env') === 'development') {","    app.use(function(err, req, res, next) {","        res.status(err.status || 500);","        res.render('error', {","            message: err.message,","            error: err","        });","    });","}","","// production error handler","// no stacktraces leaked to user","app.use(function(err, req, res, next) {","    res.status(err.status || 500);","    res.render('error', {","        message: err.message,","        error: {}","    });","});","","","module.exports = app;",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":25,"column":18},"end":{"row":25,"column":23},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1427474413993,"hash":"0214b46e3bcaa132aefa4a9d40de9390c232bf1a"}