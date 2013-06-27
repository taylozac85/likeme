module.exports = function(app) {

 /*
  *	get conversation loads the conversation that you are having based
  * on the receiver and sender and restricts viewership to those people
  */

app.get('/conversation', function (req, res){
  res.render('conversation');
});

 /*
 	* post compose posts the message to the correct converstaion or if there 
 	* I not a conversation it just loads the sender not the receiver
  */

app.get('/compose', function (req, res){
  res.render('compose');
});

 // get messages brings you to the inbox


app.get('/messages', function (req, res){
  res.render('messages');
});

};
