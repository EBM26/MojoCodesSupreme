


 $(document).ready(function() {

   $(".chooseCircle").click(function() {
      if ($(this).hasClass("ThreePayBasicCircle")) {
          $(".OnepayBasic").hide();
          $(".OnePayBasicInside").removeClass("activeInside");
          $(this).find(".insideCircle").addClass("activeInside");
          $(".ThreepayBasic").show();
      }
      if ($(this).hasClass("OnePayBasicCircle")) {
          $(".ThreepayBasic").hide();
          $(".ThreeBasicInside").removeClass("activeInside");
          $(this).find(".insideCircle").addClass("activeInside");
          $(".OnepayBasic").show();
      }

      if ($(this).hasClass("ThreePayPlatinumCircle")) {
          $(".OnepayPlatinum").hide();
          $(".OnePlatinumCircle").removeClass("activeInside");
          $(this).find(".insideCircle").addClass("activeInside");
          $(".ThreepayPlatinum").show();
      }
      if ($(this).hasClass("OnePayPlatinumCircle")) {
          $(".ThreepayPlatinum").hide();
          $(".ThreePlatinumInside").removeClass("activeInside");
          $(this).find(".insideCircle").addClass("activeInside");
          $(".OnepayPlatinum").show();
      }
  
   });

});





 



