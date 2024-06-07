$(document).ready(function() {

  $(".slideButt").click(function(e) {
    e.preventDefault();
    	$('html, body').animate({
            scrollTop: $(".orderSec").offset().top
          }, 1000);
    });


});





      $('html, body').animate({
            scrollTop: $(".orderSec").offset().top
          }, 1000);
