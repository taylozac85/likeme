
module.exports = function(app) {

	app.get('/', function(req, res) {
		res.render('landing-page')
	});

	app.get('/home', function(req, res) {
		res.render('index')
	});

	app.get('/landing-page', function (req, res){
	  res.render('landing-page');
	});

	app.get('/view-photo-modal', function (req, res){
	  res.render('view-photo-modal');
	});

};
