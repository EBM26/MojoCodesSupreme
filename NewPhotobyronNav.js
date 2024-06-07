$(document).ready(function() {

  $("a.widget-nav__link:eq(1)").click(function(e) {
    e.preventDefault();
    	$('html, body').animate({
            scrollTop: $("#Ingredients").offset().top
          }, 1000);

    });

  $("a.widget-nav__link:eq(2)").click(function(e) {
    e.preventDefault();
    	$('html, body').animate({
            scrollTop: $("#Research").offset().top
          }, 1000);
    });

  $("a.widget-nav__link:eq(3)").click(function(e) {
    e.preventDefault();
    	$('html, body').animate({
            scrollTop: $("#Success").offset().top
          }, 1000);
    });

  $("a.widget-nav__link:eq(4)").click(function(e) {
    e.preventDefault();
    	$('html, body').animate({
            scrollTop: $("#FAQ").offset().top
          }, 1000);
    });

  $("a.widget-nav__link:eq(6)").click(function(e) {
    e.preventDefault();
    	$('html, body').animate({
            scrollTop: $("#buyNow").offset().top
          }, 1000);
    });
    
});
