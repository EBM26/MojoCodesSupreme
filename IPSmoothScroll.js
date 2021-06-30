$(document).ready(function() {

  $("a.widget-nav__link:eq(1)").click(function(e) {
    e.preventDefault();
    	$('html, body').animate({
            scrollTop: $(".reviewsSection").offset().top
          }, 1000);
    });
    
});
