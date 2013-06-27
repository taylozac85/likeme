module.exports = function(app) {

/*
 *  gets the user profile and loads users picture, title, discussions
 *  that they have been apart of, name, location, bio
 */

app.get('/profile', function (req, res){
  res.render('profile');
});


/*
 *  gets my-profile which is going to be the same route with an
 *	if statement that checks if it's the usesr and displays the edit button
 */ 

app.get('/my-profile', function (req, res){
  res.render('my-profile');
});

// get photos route based on user

// get edit profile, it needs to load the data into each of the form fields


app.get('/edit-profile', function (req, res){
  res.render('edit-profile');
});


// update edit profile lets you modify the database and then redirects to get edit profile

// remove photos allows you to delete photos

};
