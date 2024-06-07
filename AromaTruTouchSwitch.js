  $(document).ready(function() {

   $(".smartButt").click(function() {
      $(".touchButt").removeClass("activeButt");
      $(this).addClass("activeButt");
      $(".buttIMG").attr("src","https://mojonow.blob.core.windows.net/cmr/t16219/src/98f2e48dd14b43e496456c36be17777d_1.png");
      $(".smartSelect").show();
      $(".touchSelect").hide();
      $(".copyChange1").html("<b>AromaTru is a Revolutionary<br>New Waterless Diffuser</b><br><br>No counting drops, no adding water, no mold and bacteria build-up just pure diffusion—wherever and whenever you want it...your bedroom, living room, kitchen, office or den.<br><br> You can also use AromaTru manually with other brands of essential oils (packaged in standard 15 ml bottles).<br><br>AromaTru State of the Art Diffuser:");
      $(".priceChange").html("$249.95");
      $(".img3 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t16219/src/61f0daa1735045b4b5e87f170ecaae72_1.jpg");
      $(".img1 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t16219/src/633211f70de8498e96dc1bd816fb6423_1.jpg");
      $(".img1").addClass("smartImg1");
   });

    $(".touchButt").click(function() {
      $(".smartButt").removeClass("activeButt");
      $(this).addClass("activeButt");
      $(".buttIMG").attr("src","https://mojonow.blob.core.windows.net/cmr/t16219/src/8b81eecc0ddd486e8fd771aa583c1b97_1.png");
      $(".smartSelect").hide();
      $(".touchSelect").show();
      $(".priceChange").html("$199.95");
      $(".copyChange1").html("<b>AromaTru is a Revolutionary<br> New Waterless Diffuser</b><br><br>No counting drops, no adding water, no cleaning, no mold and bacteria build-up just pure diffusion — wherever and whenever you want it. AromaTru creates a relaxing, spa-like experience in your bedroom, living room, kitchen, office or den.<br><br>Use with AromaTru's USDA Organic or Wildcrafted oils. You can also use AromaTru with other brands of essential oils (packaged in standard 15 ml bottles).<br><br>AromaTru State of the Art Diffuser:");
      $(".img3 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t16219/src/c35993b2892d4348bea130f1fc841ba7_1.jpg");
      $(".img1 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t16219/src/26f2dcf30b7045eba5f5bbff13206a7b_1.jpg");
      $(".img1").removeClass("smartImg1");
   });

});


  $(document).ready(function() {

   $(".clickIMG").click(function() {

     if ($(this).hasClass("smartImg1")) {
        $(".prodcutImage").hide();
        $(".vidPlay").show();
     }
     else {

         $(".prodcutImage").show();
         $(".vidPlay").hide();
         var insideImg = $(this).find("img").attr('src');
         $(".prodcutImage img").attr('src', insideImg);
     }
   });

}); 

// affiliate script
    $(document).ready(function() {

   $(".smartButt").click(function() {
      $(".touchButt").removeClass("activeButt");
      $(this).addClass("activeButt");
      $(".buttIMG").attr("src","https://mojonow.blob.core.windows.net/cmr/t16219/src/98f2e48dd14b43e496456c36be17777d_1.png");
      $(".smartSelect").show();
      $(".touchSelect").hide();
      $(".copyChange1").html("<b>AromaTru is a Revolutionary<br>New Waterless Diffuser</b><br><br>No counting drops, no adding water, no mold and bacteria build-up just pure diffusion—wherever and whenever you want it...your bedroom, living room, kitchen, office or den.<br><br> You can also use AromaTru manually with other brands of essential oils (packaged in standard 15 ml bottles).<br><br>AromaTru State of the Art Diffuser:");
      $(".nameChange").html("Smart");
      $(".priceChange").html('<s style="color: red;"><span style="color: #000; margin-right: 5px;">$249.95</span></s> <b>$187.46</b>');
      $(".img3 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t16219/src/61f0daa1735045b4b5e87f170ecaae72_1.jpg");
      $(".img1 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t16219/src/633211f70de8498e96dc1bd816fb6423_1.jpg");
      $(".img1").addClass("smartImg1");
   });

    $(".touchButt").click(function() {
      $(".smartButt").removeClass("activeButt");
      $(this).addClass("activeButt");
      $(".buttIMG").attr("src","https://mojonow.blob.core.windows.net/cmr/t16219/src/8b81eecc0ddd486e8fd771aa583c1b97_1.png");
      $(".smartSelect").hide();
      $(".touchSelect").show();
      $(".priceChange").html('<s style="color: red;"><span style="color: #000; margin-right: 5px;">$199.95</span></s> <b>$149.96</b>');
      $(".copyChange1").html("<b>AromaTru is a Revolutionary<br> New Waterless Diffuser</b><br><br>No counting drops, no adding water, no cleaning, no mold and bacteria build-up just pure diffusion — wherever and whenever you want it. AromaTru creates a relaxing, spa-like experience in your bedroom, living room, kitchen, office or den.<br><br>Use with AromaTru's USDA Organic or Wildcrafted oils. You can also use AromaTru with other brands of essential oils (packaged in standard 15 ml bottles).<br><br>AromaTru State of the Art Diffuser:");
      $(".nameChange").html("Touch");
      $(".img3 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t16219/src/c35993b2892d4348bea130f1fc841ba7_1.jpg");
      $(".img1 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t16219/src/26f2dcf30b7045eba5f5bbff13206a7b_1.jpg");
      $(".img1").removeClass("smartImg1");
   });

});






 