module.exports = function(app) {

	/*
	 * gets discuss loads the discussion board with the most recent questions 
	 * within your community. Also loads all the discussions you have participated in
	 * Also loads your community tags
	 */


	app.get('/discuss', function (req, res){
	  res.render('discuss');
	});

	// post disucss question with the right tags to the discussion model

	/* 
	 * gets discussion loads the discussion question with the users' comments
	 * also loads any of the related questions
	 */


	app.get('/discussion', function (req, res){
	  res.render('discussion');
	});

	// posts discussion comment adds a user comment to the individual discussion question


};
