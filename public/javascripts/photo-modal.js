// Index View Photos Modal
$(function(){

    var $focusPic = $('#view-large-img');
    
    $('img.view-right-img').on('click', function(){
        var $newPic = $(this);
        var newSource = $newPic.attr("src");
        $focusPic.attr("src", newSource);

        $('img').remove('.view-bottom-img');
        $('#view-no-pics').show();

        (function(){
            var randomPic = Math.floor(Math.random() * 40 + 1);
            $('img.view-right-img').each(function(index){
                $(this).attr("src", "images/yoga" + (randomPic + index) + ".jpg");
            });    
        }).call(this);
        
    });
    
    $('img.view-bottom-img').on('click', function(){
        var $newPic = $(this);
        var newSource = $newPic.attr("src");
        var focusSource = $focusPic.attr("src");
        $focusPic.attr("src", newSource);
        $newPic.attr("src", focusSource);
    });

    $('img.home-img').on('click', function(){
    	var $selectedPic = $(this);
    	$focusPic.attr("src", $selectedPic.attr("src"));

    	if ($selectedPic.attr("src") != "images/yoga2.jpg") {
   			$('img').remove('.view-bottom-img');
    	}
    });

});


// Profile View Photos Modal
$(function(){
    (function(){
        $('img.profile-modal-bottom-img').on('click', function(){
            var $newPic = $(this);
            var newSource = $newPic.attr("src");
            var $largePic = $('#profile-modal-large-img');
            var largeSource = $largePic.attr("src");
            $largePic.attr("src", newSource);
            $newPic.attr("src", largeSource);
        });
    }).call(this);

    $('#profile-modal-slide-right').on('click', function(){
        var $newPic = $('img.profile-modal-bottom-img');
        var newSource = $newPic.attr("src");
        var $largePic = $('#profile-modal-large-img');
        var largeSource = $largePic.attr("src");
        $largePic.attr("src", newSource);
        
        $('img.profile-modal-bottom-img').each(function(index){
            var image1 = $('img.profile-modal-bottom-img')[1];
            $('img.profile-modal-bottom-img')[0] = image1;
        });

    });

});