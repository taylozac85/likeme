
module.exports = function(app) {

	app.get('/', function(req, res) {
		res.render('landing-page')
	});

	app.get('/landing-page', function (req, res){
	  res.render('landing-page');
	});


};
