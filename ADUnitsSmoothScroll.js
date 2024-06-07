$(document).ready(function() {

  $(".linkButt").click(function(e) {
    e.preventDefault();
    	$('html, body').animate({
            scrollTop: $(".linkageSec").offset().top
          }, 1000);
    });
    
});

$(document).ready(function() {
   $(".topBuy").click(function(e) {
      $('html, body').animate({
            scrollTop: $("#orderDiv").offset().top
          }, 1000);
    });
});


// for buttons
$('html, body').animate({
    scrollTop: $(".orderSection").offset().top
}, 1000);