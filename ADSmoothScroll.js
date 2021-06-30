$(document).ready(function() {

  $("a.widget-nav__link:eq(6)").click(function(e) {
    e.preventDefault();
    	$('html, body').animate({
            scrollTop: $("#orderSection").offset().top
          }, 1000);
    });


      $('html, body').animate({
            scrollTop: $("#orderSection").offset().top
          }, 1000);
    
});
