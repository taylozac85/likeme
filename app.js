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
app.get('/landing-page', function (req, res){
  res.render('landing-page');
});
app.get('/profile', function (req, res){
  res.render('profile');
});
app.get('/my-profile', function (req, res){
  res.render('my-profile');
});
app.get('/edit-profile', function (req, res){
  res.render('edit-profile');
});
app.get('/discover', function (req, res){
  res.render('discover');
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
app.get('/discussion', function (req, res){
  res.render('discussion');
});
app.get('/discuss', function (req, res){
  res.render('discuss');
});
app.get('/test', function (req, res){
  res.render('test');
});
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});