$(function(){
    
    var $focusPic = $('#view-large-img');
    
    $('img.view-right-img').on('click', function(){
        var $newPic = $(this);
        var newSource = $newPic.attr("src");
        $focusPic.attr("src", newSource);

        $('img').remove('.view-bottom-img');
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
    })

});