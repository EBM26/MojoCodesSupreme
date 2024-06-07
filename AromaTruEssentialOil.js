$(document).ready(function() {

  $(".quickRow").click(function() {
   
      if ( $(this).hasClass("balsamClick") ) {
        $(".wrapperSection, .balsamRow").fadeIn();
      }

      if ( $(this).hasClass("basilClick") ) {
        $(".wrapperSection, .basilRow").fadeIn();
      }

      if ( $(this).hasClass("bergamotClick") ) {
        $(".wrapperSection, .bergamotRow").fadeIn();
      }

      if ( $(this).hasClass("spruceClick") ) {
        $(".wrapperSection, .spruceRow").fadeIn();
      }

      if ( $(this).hasClass("pepperClick") ) {
        $(".wrapperSection, .pepperRow").fadeIn();
      }

      if ( $(this).hasClass("cinnamonClick") ) {
        $(".wrapperSection, .cinnamonRow").fadeIn();
      }

      if ( $(this).hasClass("citronellaClick") ) {
        $(".wrapperSection, .citronellaRow").fadeIn();
      }

      if ( $(this).hasClass("sageClick") ) {
        $(".wrapperSection, .sageRow").fadeIn();
      }

      if ( $(this).hasClass("corianderClick") ) {
        $(".wrapperSection, .corianderRow").fadeIn();
      }

      if ( $(this).hasClass("cypressClick") ) {
        $(".wrapperSection, .cypressRow").fadeIn();
      }

      if ( $(this).hasClass("eucalyptusClick") ) {
        $(".wrapperSection, .eucalyptusRow").fadeIn();
      }

      if ( $(this).hasClass("frankincenseClick") ) {
        $(".wrapperSection, .frankincenseRow").fadeIn();
      }

      if ( $(this).hasClass("geraniumClick") ) {
        $(".wrapperSection, .geraniumRow").fadeIn();
      }

      if ( $(this).hasClass("gingerClick") ) {
        $(".wrapperSection, .gingerRow").fadeIn();
      }

      if ( $(this).hasClass("grapefruitClick") ) {
        $(".wrapperSection, .grapefruitRow").fadeIn();
      }

      if ( $(this).hasClass("hoClick") ) {
        $(".wrapperSection, .hoRow").fadeIn();
      }

      if ( $(this).hasClass("indianClick") ) {
        $(".wrapperSection, .indianRow").fadeIn();
      }

      if ( $(this).hasClass("wildClick") ) {
        $(".wrapperSection, .wildRow").fadeIn();
      }

      if ( $(this).hasClass("lemonClick") ) {
        $(".wrapperSection, .lemonRow").fadeIn();
      }

      if ( $(this).hasClass("eucalyptusLemonClick") ) {
        $(".wrapperSection, .eucalyptusLemonRow").fadeIn();
      }

      if ( $(this).hasClass("lemongrassClick") ) {
        $(".wrapperSection, .lemongrassRow").fadeIn();
      }

      if ( $(this).hasClass("limeClick") ) {
        $(".wrapperSection, .limeRow").fadeIn();
      }

      if ( $(this).hasClass("mandrinClick") ) {
        $(".wrapperSection, .mandrinRow").fadeIn();
      }

      if ( $(this).hasClass("palmarosaClick") ) {
        $(".wrapperSection, .palmarosaRow").fadeIn();
      }

      if ( $(this).hasClass("patchouliClick") ) {
        $(".wrapperSection, .patchouliRow").fadeIn();
      }

      if ( $(this).hasClass("peppermintClick") ) {
        $(".wrapperSection, .peppermintRow").fadeIn();
      }

      if ( $(this).hasClass("petitgrainClick") ) {
        $(".wrapperSection, .petitgrainRow").fadeIn();
      }

      if ( $(this).hasClass("pineClick") ) {
        $(".wrapperSection, .pineRow").fadeIn();
      }

      if ( $(this).hasClass("ravintsaraClick") ) {
        $(".wrapperSection, .ravintsaraRow").fadeIn();
      }

      if ( $(this).hasClass("cedarClick") ) {
        $(".wrapperSection, .cedarRow").fadeIn();
      }

      if ( $(this).hasClass("thymeClick") ) {
        $(".wrapperSection, .thymeRow").fadeIn();
      }

      if ( $(this).hasClass("rhododendronClick") ) {
        $(".wrapperSection, .rhododendronRow").fadeIn();
      }

      if ( $(this).hasClass("rosemaryClick") ) {
        $(".wrapperSection, .rosemaryRow").fadeIn();
      }

      if ( $(this).hasClass("verbenoneClick") ) {
        $(".wrapperSection, .verbenoneRow").fadeIn();
      }

      if ( $(this).hasClass("spanishSageClick") ) {
        $(".wrapperSection, .spanishSageRow").fadeIn();
      }

      if ( $(this).hasClass("spearmintClick") ) {
        $(".wrapperSection, .spearmintRow").fadeIn();
      }

      if ( $(this).hasClass("marjoramClick") ) {
        $(".wrapperSection, .marjoramRow").fadeIn();
      }

      if ( $(this).hasClass("orangeClick") ) {
        $(".wrapperSection, .orangeRow").fadeIn();
      }

      if ( $(this).hasClass("teatreeClick") ) {
        $(".wrapperSection, .teatreeRow").fadeIn();
      }

      if ( $(this).hasClass("lavenderClick") ) {
        $(".wrapperSection, .lavenderRow").fadeIn();
      }

      if ( $(this).hasClass("ylangClick") ) {
        $(".wrapperSection, .ylangRow").fadeIn();
      }


  });
  
  $(".bigX").click(function() {
        $(".wrapperSection, .hidRow").fadeOut();
  });


});


$(document).ready(function() {
  $(".numDiv").click(function() {
    if ($(this).hasClass("firstNum")) {
        $(".numDiv").removeClass("activeDiv");
        $(".oilSection").hide();
        $(this).addClass("activeDiv");
        $(".firstSection").show();
        $(".startingNum").html("1");
        $(".endingNum").html("12");
        jumpUP();
      }
      if ($(this).hasClass("secondNum")) {
        $(".numDiv").removeClass("activeDiv");
        $(".oilSection").hide();
        $(this).addClass("activeDiv");
        $(".secondSection").show();
        $(".startingNum").html("13");
        $(".endingNum").html("24");
        jumpUP();
      }
      if ($(this).hasClass("thirdNum")) {
        $(".numDiv").removeClass("activeDiv");
        $(".oilSection").hide();
        $(this).addClass("activeDiv");
        $(".thirdSection").show();
        $(".startingNum").html("25");
        $(".endingNum").html("36");
        jumpUP();
      }
      if ($(this).hasClass("fourthNum")) {
        $(".numDiv").removeClass("activeDiv");
        $(".oilSection").hide();
        $(this).addClass("activeDiv");
        $(".fourthSection").show();
        $(".startingNum").html("37");
        $(".endingNum").html("41");
        jumpUP();
      }

      function jumpUP () {
        $('html, body').animate({
            scrollTop: $(".topPage").offset().top
          }, 1000);
      }
  });

});





.wrapperSection{display: none; z-index: 200000; position: fixed;}