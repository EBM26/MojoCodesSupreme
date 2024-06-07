$(document).ready(function() {


   $("#AQTConnect").click(function() { 
      $(".connectDetails, .easierSection, .connectPaymentRow, .connectList").show();  
      $(".checkCol1").addClass("greyBack");
      $(".checkCol2").removeClass("greyBack");
      $(".classicPaymentRow").hide();
      $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t15917/src/7c3982f97eff49b29c975de7fea27273_1.jpg");  
      $(".smallPic1 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t15917/src/7c3982f97eff49b29c975de7fea27273_1.jpg");  
      $(".smallPic4 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t13738/src/0f4331b172984c7a8b65f1c3db3e0a03_1.jpg");  
      $(".smallPic1").click(function() {
        $(".videoCustom").hide();
          $(".bigPic").show();
          $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t15917/src/7c3982f97eff49b29c975de7fea27273_1.jpg");
       });
      $(".smallPic2").click(function() {
            $(".videoCustom").hide();
              $(".bigPic").show();
            $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t9383/src/e7e403b49c5848419cb56f4b719e7a4c_1.png");
      });
      $(".smallPic3").click(function() {
             $(".videoCustom").hide();
              $(".bigPic").show();
            $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t9383/src/2bdaed6bb98041ea8eb15c0725486507_1.png");
          });
      $(".smallPic4").click(function() {
            $(".bigPic").hide();
            $(".videoCustom").show();
      });
    });

     $("#AQTClassic").click(function() {
        $(".videoCustom").hide();
          $(".bigPic, .classicPaymentRow").show();
      $(".connectDetails, .easierSection, .connectPaymentRow, .connectList").hide();
      $(".checkCol2").addClass("greyBack");
      $(".checkCol1").removeClass("greyBack");  
      $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t15917/src/dc63bcb8371f4cf7bb9a9be4f16380cb_1.jpg");  
      $(".smallPic1 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t15917/src/dc63bcb8371f4cf7bb9a9be4f16380cb_1.jpg");  
      $(".smallPic4 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t9383/src/61d9b133b088444ba8253f82639416f7_1.jpg");  
      $(".smallPic1").click(function() {
            $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t15917/src/dc63bcb8371f4cf7bb9a9be4f16380cb_1.jpg");
       });
      $(".smallPic2").click(function() {
            $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t9383/src/e7e403b49c5848419cb56f4b719e7a4c_1.png");
      });
      $(".smallPic3").click(function() {
            $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t9383/src/2bdaed6bb98041ea8eb15c0725486507_1.png");
          });
      $(".smallPic4").click(function() {
        $(".bigPic").show();
            $(".videoCustom").hide();
            $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t9383/src/9942774fb76b4f92a63353eeadae09ae_1.jpg");
      });
    });

  $("#AQTConnect").trigger('click');
});
