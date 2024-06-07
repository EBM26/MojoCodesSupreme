$(document).ready(function() {


   $("#AQTConnect").click(function() { 
      $(".connectDetails, .easierSection, .connectPaymentRow").show();  
      $(".checkCol1").addClass("greyBack");
      $(".checkCol2").removeClass("greyBack");
      $(".classicPaymentRow").hide();
      $(".smallPic2 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t14138/src/93d3c395dfe541f2bfe7fd453c9f885c_1.png");  
      $(".smallPic3 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t14138/src/8fcfaaf0a08a4ec2a735e414c64f617f_1.jpg");  
      $(".smallPic4 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t13738/src/0f4331b172984c7a8b65f1c3db3e0a03_1.jpg");  
      $(".smallPic1").click(function() {
        $(".videoCustom").hide();
          $(".bigPic").show();
          $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t14138/src/bfbd8090407c4046a667aac488fedd17_1.png");
       });
      $(".smallPic2").click(function() {
            $(".videoCustom").hide();
              $(".bigPic").show();
            $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t14138/src/93d3c395dfe541f2bfe7fd453c9f885c_1.png");
      });
      $(".smallPic3").click(function() {
             $(".videoCustom").hide();
              $(".bigPic").show();
            $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t14138/src/8fcfaaf0a08a4ec2a735e414c64f617f_1.jpg");
          });
      $(".smallPic4").click(function() {
            $(".bigPic").hide();
            $(".videoCustom").show();
      });
    });

     $("#AQTClassic").click(function() {
        $(".videoCustom").hide();
          $(".bigPic, .classicPaymentRow").show();
      $(".connectDetails, .easierSection, .connectPaymentRow").hide();
      $(".checkCol2").addClass("greyBack");
      $(".checkCol1").removeClass("greyBack");  
      $(".smallPic2 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t14138/src/3d0b125a5789435db5dfdfed816179cc_1.png");  
      $(".smallPic3 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t14138/src/9dbfdece49c649e483cf5ae19a7bb7a0_1.jpg");  
      $(".smallPic4 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t9383/src/61d9b133b088444ba8253f82639416f7_1.jpg");  
      $(".smallPic1").click(function() {
            $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t14138/src/bfbd8090407c4046a667aac488fedd17_1.png");
       });
      $(".smallPic2").click(function() {
            $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t14138/src/3d0b125a5789435db5dfdfed816179cc_1.png");
      });
      $(".smallPic3").click(function() {
            $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t14138/src/9dbfdece49c649e483cf5ae19a7bb7a0_1.jpg");
          });
      $(".smallPic4").click(function() {
        $(".bigPic").show();
            $(".videoCustom").hide();
            $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t9383/src/9942774fb76b4f92a63353eeadae09ae_1.jpg");
      });
    });

  $("#AQTConnect").trigger('click');
});
