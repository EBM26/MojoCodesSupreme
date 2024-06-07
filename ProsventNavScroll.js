$(document).ready(function() {

    $("a.widget-nav__link:eq(0)").click(function(e) {
    e.preventDefault();
      $('html, body').animate({
            scrollTop: $("#Features").offset().top
          }, 1000);
    });

    $("a.widget-nav__link:eq(1)").click(function(e) {
    e.preventDefault();
      $('html, body').animate({
            scrollTop: $("#Benefits").offset().top
          }, 1000);
    });


});


 $(document).ready(function() {

  $("a.widget-nav__link:eq(4)").click(function(e) {
    e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".orderSec").offset().top
          }, 1000);
    });


});


