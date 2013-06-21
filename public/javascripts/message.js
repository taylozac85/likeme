function deselect() {
    $(".pop").fadeToggle(function() { 
        $("#message-btn").removeClass("selected");
    });    
}

function setModal(){
    var winH = $(window).height();
    var winW = $(window).width();
    //Set the popup window to center
    $('.pop').css('top',  winH/2-$('.pop').height()/2);
    $('.pop').css('left', winW/2-$('.pop').width()/2);
};

$(function() {
    $("#message-btn").on('click', function() {
        if($(this).hasClass("selected")) {
            deselect();               
        } else {
            $(this).addClass("selected");
            setModal();
            $(".pop").fadeToggle(function() { 
                $("#email").focus();
            });
        }
        return false;
    });

    $(".close-message").on('click', function() {
        deselect();
        return false;
    });
});