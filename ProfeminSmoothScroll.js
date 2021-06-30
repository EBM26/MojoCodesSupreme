$(document).ready(function() {

  $("a.widget-nav__link:eq(2)").click(function(e) {
    e.preventDefault();
    	$('html, body').animate({
            scrollTop: $("#buyNow").offset().top
          }, 1000);
    });


      $('html, body').animate({
            scrollTop: $("#buyNow").offset().top
          }, 1000);
    
});
