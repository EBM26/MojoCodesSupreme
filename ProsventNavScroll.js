$(document).ready(function() {

  $("a.widget-nav__link:eq(0)").click(function(e) {
    e.preventDefault();
    	$('html, body').animate({
            scrollTop: $("#success").offset().top
          }, 1000);
    });

  $("a.widget-nav__link:eq(1)").click(function(e) {
    e.preventDefault();
    	$('html, body').animate({
            scrollTop: $("#benefits").offset().top
          }, 1000);
    });

  $("a.widget-nav__link:eq(2)").click(function(e) {
    e.preventDefault();
    	$('html, body').animate({
            scrollTop: $("#ingredients").offset().top
          }, 1000);
    });

  $("a.widget-nav__link:eq(3)").click(function(e) {
    e.preventDefault();
      $('html, body').animate({
            scrollTop: $("#about").offset().top
          }, 1000);
    });

  $("a.widget-nav__link:eq(4)").click(function(e) {
    e.preventDefault();
      $('html, body').animate({
            scrollTop: $("#faq").offset().top
          }, 1000);
    });
});
