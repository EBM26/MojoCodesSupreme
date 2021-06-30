$(document).ready(function() {

  $("a.widget-nav__link:eq(0)").click(function(e) {
    e.preventDefault();
    	$('html, body').animate({
            scrollTop: $("#Peace").offset().top
          }, 1000);
    });

  $("a.widget-nav__link:eq(1)").click(function(e) {
    e.preventDefault();
    	$('html, body').animate({
            scrollTop: $("#Grade").offset().top
          }, 1000);
    });

  $("a.widget-nav__link:eq(2)").click(function(e) {
    e.preventDefault();
    	$('html, body').animate({
            scrollTop: $("#Simple").offset().top
          }, 1000);
    });
});
