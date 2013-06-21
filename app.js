var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/profile', function (req, res){
  res.render('profile');
});
app.get('/search', function (req, res){
  res.render('search');
});
app.get('/conversation', function (req, res){
  res.render('conversation');
});
app.get('/compose', function (req, res){
  res.render('compose');
});
app.get('/messages', function (req, res){
  res.render('messages');
});
app.get('/disc', function (req, res){
  res.render('disc');
});
app.get('/test', function (req, res){
  res.render('test');
});
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});