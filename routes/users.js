
module.exports = function(app) {

/*
 * User Routes
 */

var User = require('../data/models/user');
var notLoggedIn = require('./middleware/not_logged_in');
var loadUser = require('./middleware/load_user');
var restrictUserToSelf = require('./middleware/restrict_user_to_self');

  app.get('/users', function(req, res,next){
    User.find({}, function(err, users) {
      if (err) {
        return next(err);
      }
      res.render('users/index', {title: 'Users', users: users});
    });
  });

  app.get('/users/new', notLoggedIn, function(req, res) {
    res.render('users/new', {title: "New User"});
  });

  app.get('/users/:name', loadUser, function(req, res, next){
    res.render('users/profile', {title: 'User profile', user: req.user});
  });

  app.post('/users', function(req, res, next) {
    User.create(req.body, function(err) {
      if (err) {
        if (err.code === 11000) {
          res.send('Conflict', 409);
        } else {
          if (err.name === 'ValidationError') {
            return res.send(Object.keys(err.errors).map(function(errField) {
              return err.errors[errField].message;
            }).join('. '), 406);
          } else {
          next(err);
          }

        }
        return;
      }
      res.redirect('/users');
    });
  });

  app.del('/users/:name', loadUser, restrictUserToSelf,
    function(req, res, next) {
      req.user.remove(function(err) {
        if (err) { return next(err); }
        res.redirect('/users');
      });
    
  });

// gets account page, checks that you are logged in and loads your email address

// update email address and password

// deletes profile

// gets the signup page

// posts new user signup

};