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
        var currentSource = $selectedPic.attr("src");
        var newFocusSource = currentSource.slice(0,7) + currentSource.slice(11);
        
        if (currentSource.indexOf("rsz_") != -1) {
            $focusPic.attr("src", newFocusSource);
        } else {
            $focusPic.attr("src", currentSource);
        };

    	if ($selectedPic.attr("src") != "images/rsz_yoga2.jpg") {
   			$('img').remove('.view-bottom-img');
    	}
    });

    $('#viewLargestModal').on('hidden', function(){
        $('#viewModal').show(); 
    });


    // $('#view-large-img').on('click', function(){
    //     var $largestPhoto = $('#largestModalPhoto');
    //     $largestPhoto.attr('src', $(this).attr('src'));

    //     var viewHeight = $(window).height();
    //     var viewWidth = $(window).width();
    //     $('#viewLargestModal').css('width', viewWidth);
    //     $('#viewLargestModal').css('heigh', viewHeight);

    //     $('#viewModal').hide();

    // });

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
    
    // Will want to replace with cycling through the index of photos associated with a user
    $('#profile-modal-slide-left').on('click', function(){
        var $focusPhoto = $('#profile-modal-large-img');
        var $focusSource = $focusPhoto.attr('src');
        var $sourceIndex = parseInt($focusSource.slice(14,15));
        if ($sourceIndex == 2) {
            $focusPhoto.attr('src', "images/yoga10-8.jpg");
        } else {
            $focusPhoto.attr('src', "images/yoga10-" + ($sourceIndex - 1) + ".jpg");
        }
    });

    $('#profile-modal-slide-right').on('click', function(){
        var $focusPhoto = $('#profile-modal-large-img');
        var $focusSource = $focusPhoto.attr('src');
        var $sourceIndex = parseInt($focusSource.slice(14,15));
        if ($sourceIndex == 8) {
            $focusPhoto.attr('src', "images/yoga10-2.jpg");
        } else {
            $focusPhoto.attr('src', "images/yoga10-" + ($sourceIndex + 1) + ".jpg");
        }    
    });

});