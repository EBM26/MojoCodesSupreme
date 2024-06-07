$(document).ready(function() {


   $("#AQTConnect").click(function() {
      $(".pageTitle").html("AquaTru Under Sink");
      $(".videoCustom, .alkalinePaymentRow").hide();  
      $(".underSinkPaymentRow").show();  
      $(".checkCol1").addClass("greyBack");
      $(".checkCol2").removeClass("greyBack");
      $(".filt").html("Carbon");
      $(".topText").html("Designed for the homeowner or larger family who wants a higher capacity of fresh, flowing, purely delicious AquaTru water on demand. Unlike our countertop purifiers, AquaTru Under Sink Water Purifier requires installation. Connection to your plumbing allows you to fill up pots, pans, water bottles, and sippy cups with ease—and with the same 4-stage reverse osmosis purification process and easy-to-change AquaTru filters found in our other purifiers.<br><br>Normally, under sink reverse osmosis holding tanks can be a breeding ground for bacteria, if not properly maintained. That’s why we developed our patent-pending TruPure RO Sanitizer that makes it easy to keep your AquaTru holding tank in pristine condition. Just another way AquaTru ensures that you have pure, great-tasting water.");
      $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t15917/src/e40f7aa0d68646a3837a749e68d60cb4_1.jpg");  
      $(".smallPic1 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t15917/src/e40f7aa0d68646a3837a749e68d60cb4_1.jpg");  
      $(".bottomPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t11541/src/7b3c4a3b55204a39b7f723445c8e5b71_1.png");  
      $(".smallPic1").click(function() {
            $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t15917/src/e40f7aa0d68646a3837a749e68d60cb4_1.jpg");
       });
      $(".smallPic2").click(function() {
            $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t11707/src/c9be736bdc1f46ac995017eaa7e82b9c_1.jpg");
      });
      $(".smallPic3").click(function() {
            $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t11541/src/ce3a722561bd4ee183d2071458ab088b_1.jpg");
          });
      $(".smallPic4").click(function() {
           $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t11541/src/119e63e1eb4c4708ba2d1f4cb535c60c_1.jpg");
      });
    });

     $("#AQTAlkaline").click(function() {
        $(".videoCustom, .alkalinePaymentRow").show();
        $(".underSinkPaymentRow").hide(); 
      $(".pageTitle").html("AquaTru Alkaline Under Sink");
      $(".checkCol2").addClass("greyBack");
      $(".checkCol1").removeClass("greyBack"); 
      $(".filt").html("Alkaline"); 
      $(".topText").html("If you love the thirst quenching taste & healthy benefits of mineral-rich, alkaline water, AquaTru Under Sink Alkaline is perfect for your home. Our pH + Mineral Boost Alkaline filter uses a proprietary blend of healthy minerals with our activated carbon to not only remove VOC contaminants, but also add healthy minerals and create alkaline water on demand from the convenience of your kitchen sink.<br><br>Normally, under sink reverse osmosis holding tanks can be a breeding ground for bacteria, if not properly maintained. That’s why we developed our patent-pending TruPure RO Sanitizer that makes it easy to keep your AquaTru holding tank in pristine condition. Just another way AquaTru ensures that you have pure, great-tasting water.");
      $(".smallPic1 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t15917/src/e40f7aa0d68646a3837a749e68d60cb4_1.jpg");
      $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t15917/src/e40f7aa0d68646a3837a749e68d60cb4_1.jpg");
      $(".bottomPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t11541/src/85142b20cb674fd6b20cf3bba8578fb0_1.png");   
      $(".smallPic1").click(function() {
            $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t15917/src/e40f7aa0d68646a3837a749e68d60cb4_1.jpg");
       });
      $(".smallPic2").click(function() {
            $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t11707/src/c9be736bdc1f46ac995017eaa7e82b9c_1.jpg");
      });
      $(".smallPic3").click(function() {
            $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t11541/src/ce3a722561bd4ee183d2071458ab088b_1.jpg");
          });
      $(".smallPic4").click(function() {
            $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t11541/src/119e63e1eb4c4708ba2d1f4cb535c60c_1.jpg");
      });
    });

  $("#AQTConnect").trigger('click');
});



