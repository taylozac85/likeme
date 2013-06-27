
var User = require('../data/models/user');
var notLoggedIn = require('./middleware/not_logged_in');

module.exports = function(app) {

	app.get('/session/new', notLoggedIn, function(req, res) {
		res.render('session/new', {title: "Log in"});
	});

	app.post('/session', notLoggedIn, function(req, res) {
		User.findOne({username: req.body.username, password: req.body.password},
			function(err, user) {
				if (err) {
					return next (err);
				}

				if (user) {
					req.session.user = user;
					res.redirect('/users');
				} else {
					res.redirect('/session/new');
				}
			});
	});

	app.del('/session', function(req, res, next) {
		req.session.destroy();
		res.redirect('/users');
	});

// gets logout clears the cookie and redirects to login page

	app.get('/logout', function(req, res) {
		req.session = null;
		res.redirect('session/new');
	});

// gets Login simply loads the login page and doublechecks that there isn't already a user logged in

// posts Login verifies user and password and creates a new session

// gets forgot password sends them to forgot password page

// post forgot password accepts email address, sends the email and redirects to login

// gets logout clears the cookie and redirects to login page

// gets home page for logged in users

};