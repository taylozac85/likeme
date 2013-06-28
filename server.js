var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/users')
  , http = require('http')
  , mongoose = require('mongoose')
  , path = require('path');

var app = express();

//Uncomment for dev mode
//var dbURL = 'mongodb://localhost/temp';
//var db = mongoose.connect(dbURL);

//Comment for dev mode
var uri = 'mongodb://heroku_app16169546:fgqq6sgb611rb9n9oa3qsffe3k@ds031328.mongolab.com:31328/heroku_app16169546';
mongoose.connect(uri);

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('We need a secret key'));
  app.use(express.cookieSession({ cookie: {maxAge: 60 * 60 * 1000}}));
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

require('./routes/profile')(app);
require('./routes/index')(app);
require('./routes/users')(app);
require('./routes/session')(app);
require('./routes/discover')(app);
require('./routes/discussion')(app);
require('./routes/message')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});