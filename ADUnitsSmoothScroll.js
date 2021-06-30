$(document).ready(function() {

  $(".textAnch").click(function(e) {
    e.preventDefault();
    	$('html, body').animate({
            scrollTop: $("#compare").offset().top
          }, 1000);
    });
    
});
