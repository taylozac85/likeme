$(function(){
  // set height of message list
  var viewHeight = $(window).height();
  var messageHeight = viewHeight * .7;
  $('#conv-message-list-container').css('min-height', messageHeight)
  // scroll to reply
  $('#conv-message-list-container').scrollTop($('#conv-message-list-container')[0].scrollHeight);
  // set height of the container
  $('.body-container-convert').css('min-height', viewHeight);
  // adjust for resizing of window
  (function(){
  	$(window).resize(function(){
      var viewH = $(window).height();
      var messageH = viewH * .7;
      $(".body-container-convert").css('min-height', viewH)
      $("#conv-message-list-container").css('min-height', messageH)
      $('#conv-message-list-container').scrollTop($('#conv-message-list-container')[0].scrollHeight);
    });
  }).call(this);
});

