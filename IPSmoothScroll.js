$(document).ready(function() {

  $(".amazonStars").click(function(e) {
    e.preventDefault();
    	$('html, body').animate({
            scrollTop: $("#testimonialsDiv").offset().top
          }, 1000);
    });
    
});
