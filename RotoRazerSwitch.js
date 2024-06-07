

$(document).ready(function() {
  
   $(".specialText").click(function() {
     $(".switchSection").removeClass("activeSection");
     $(".specialCol").removeClass("activeCol");
     if ($(this).hasClass("featuresText")) {
        $(".widgetTitle").html("A Tool DIY’ers Dream About...");
        $(".firstCol").addClass("activeCol");
        $(".firstSection").addClass("activeSection");
     }

     else if ($(this).hasClass("sevenText")) {
        $(".widgetTitle").html("A Powerful 7-in-1 Circular Saw");
        $(".secondCol").addClass("activeCol");
        $(".secondSection").addClass("activeSection");
     }

      else if ($(this).hasClass("safetyText")) {
        $(".widgetTitle").html("Easy, Safe To Use");
        $(".thirdCol").addClass("activeCol");
        $(".thirdSection").addClass("activeSection");
     }

     else  {
        $(".widgetTitle").html("Reviews");
        $(".fourthCol").addClass("activeCol");
        $(".fourthSection").addClass("activeSection");
     }

   });
});



$(document).ready(function() {
  
   $(".switchButt").click(function() {
    $(".switchButt").removeClass("activeButt");
    $(".selectButt").hide();
    if ($(this).hasClass("onePay")) {
      $(".onePay").addClass("activeButt");
      $(".oneSelect").show();
    }

    else {
      $(".threePay").addClass("activeButt");
      $(".threeSelect").show();
    }

   });
});