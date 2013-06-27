
var User = require('../data/models/user');

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.render('landing-page')
	});

	app.get('/home', function (req, res){
	  res.render('index');
	});	

	app.get('/landing-page', function (req, res){
	  res.render('landing-page');

	});

	app.get('/view-photo-modal', function (req, res){
	  res.render('view-photo-modal');
	});

};

/*
 * module.exports = function(app) {
 *	app.get('/', function(req, res) {
 *		if (req.session.user) {
 *			res.render('index', {title: "Your Home Page"});
 *			console.log(req.session.user);
 *		} else {
 *			res.render('session/new');
 *		}
 * });
 */
