$(document).ready(function() {

  $("a.widget-nav__link:eq(0)").click(function(e) {
    e.preventDefault();
    	$('html, body').animate({
            scrollTop: $("#inventors").offset().top
          }, 1000);
    });

    $("a.widget-nav__link:eq(1)").click(function(e) {
    e.preventDefault();
      $('html, body').animate({
            scrollTop: $("#customers").offset().top
          }, 1000);
    });

});
