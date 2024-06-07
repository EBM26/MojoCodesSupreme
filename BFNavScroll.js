$(document).ready(function() {

  $("a.widget-nav__link:eq(1)").click(function(e) {
    e.preventDefault();
    	$('html, body').animate({
            scrollTop: $("#ingredients").offset().top
          }, 1000);
    });


  $("a.widget-nav__link:eq(2)").click(function(e) {
    e.preventDefault();
    	$('html, body').animate({
            scrollTop: $("#science").offset().top
          }, 1000);
    });

  $("a.widget-nav__link:eq(3)").click(function(e) {
    e.preventDefault();
      $('html, body').animate({
            scrollTop: $("#successstories").offset().top
          }, 1000);
    });

  $("a.widget-nav__link:eq(4)").click(function(e) {
    e.preventDefault();
      $('html, body').animate({
            scrollTop: $("#faq").offset().top
          }, 1000);
    });

    $("a.widget-nav__link:eq(5)").click(function(e) {
    e.preventDefault();
      $('html, body').animate({
            scrollTop: $("#orderSection").offset().top
          }, 1000);
    });
});


$(document).ready(function() {

  $("a.widget-nav__link:eq(0)").click(function(e) {
    e.preventDefault();
      $('html, body').animate({
            scrollTop: $("#orderSec").offset().top
          }, 1000);
    });

});

