// Index View Photos Modal
$(function(){

    $('img.home-img').on('click', function(){
    	var $focusPic = $('#view-large-img');
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

    $('#profile-modal-slide-left-home').on('click', function(){
        var $focusPhoto = $('#view-large-img');
        var $focusSource = $focusPhoto.attr('src');
        var $sourceIndex = parseInt($focusSource.slice(11,13));
        if ($sourceIndex == 1) {
            $focusPhoto.attr('src', "images/yoga44.jpg");
        } else if ($sourceIndex <= 10) {
            $focusPhoto.attr('src', "images/yoga" + "0" + ($sourceIndex - 1) + ".jpg");
        } else {
            $focusPhoto.attr('src', "images/yoga" + ($sourceIndex - 1) + ".jpg");
        }
    });

    $('#profile-modal-slide-right-home').on('click', function(){
        var $focusPhoto = $('#view-large-img');
        var $focusSource = $focusPhoto.attr('src');
        var $sourceIndex = parseInt($focusSource.slice(11,13));
        if ($sourceIndex == 44) {
            $focusPhoto.attr('src', "images/yoga01.jpg");
        } else if ($sourceIndex < 9) {
            $focusPhoto.attr('src', "images/yoga" + "0" + ($sourceIndex + 1) + ".jpg");
        } else {
            $focusPhoto.attr('src', "images/yoga" + ($sourceIndex + 1) + ".jpg");
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