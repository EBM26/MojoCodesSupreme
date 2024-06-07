$(document).ready(function() {

  $(".readMore").click(function() {
      if ($(this).hasClass("activeBullets")) {
        $(this).html("Read more...").removeClass("activeBullets");
        $(".moreBullets").slideUp();

      }

      else {
        $(this).html("Read less...").addClass("activeBullets");
        $(".moreBullets").slideDown();
      }

  });


});



