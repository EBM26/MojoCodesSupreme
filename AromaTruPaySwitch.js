 $(document).ready(function() {

    $(".smartButt").click(function() {
        $(".touchButt").removeClass("activeButt");
        $(".titleTxt").html("<p>Smart Wi-Fi AromaTru Diffuser</p>");
        $(this).addClass("activeButt");
        $(".buttIMG").attr("src", "https://mojonow.blob.core.windows.net/cmr/t16219/src/98f2e48dd14b43e496456c36be17777d_1.png");
        $(".copyChange1").html("<b>AromaTru is a Revolutionary<br>New Waterless Diffuser</b><br><br>No counting drops, no adding water, no mold and bacteria build-up just pure diffusion—wherever and whenever you want it...your bedroom, living room, kitchen, office or den.<br><br> You can also use AromaTru manually with other brands of essential oils (packaged in standard 15 ml bottles).<br><br>AromaTru State of the Art Diffuser:");
        $(".textchange").html("<p>Use only with AromaTru's USDA Organic or Wildcrafted oils to create and schedule custom blends. You can also use AromaTru manually with other brands of essential oils (packaged in standard 15 ml bottles).</p>");
        $(".priceChange").html("<s class='alt'><span class='txt-b' style='color: #6E6F71 !important;'>$249.95</span></s>");
        $(".now_price").html("<b>Now $159.95</b>");
         $(".save_price").html("<b>SAVE $90<b>");
        $(".img4 img").attr("src", "https://mojonow.blob.core.windows.net/cmr/t16219/src/61f0daa1735045b4b5e87f170ecaae72_1.jpg");
        $(".img1 img").attr("src", "https://mojonow.blob.core.windows.net/cmr/t16219/src/633211f70de8498e96dc1bd816fb6423_1.jpg");
        $(".img1").addClass("smartImg1");
        $(".difSelect, .touchSelect").hide();
        $(".oneWiFiSelectPay, .smartSelect").show();
        $(".threePay").removeClass("activePay");
        $(".onePay").addClass("activePay");
        $(".panelRow").hide(500);

    });

    $(".touchButt").click(function() {
    
        $(".smartButt").removeClass("activeButt");
        $(".titleTxt").html("<p>AromaTru Diffuser</p>");
        $(this).addClass("activeButt");
        $(".buttIMG").attr("src", "https://mojonow.blob.core.windows.net/cmr/t16219/src/8b81eecc0ddd486e8fd771aa583c1b97_1.png");
        $(".priceChange").html("<s class='alt'><span class='txt-b' style='color: #6E6F71 !important; '>$199.95</span></s> ");
        $(".now_price").html("<b>Now $139.95<b>");
        $(".save_price").html("<b>SAVE $60<b>");
        $(".textchange").html("<p>Use with AromaTru's USDA Organic or Wildcrafted oils. You can also use AromaTru manually with other brands of essential oils (packaged in standard 15 ml bottles).</p>");
        $(".copyChange1").html("<b>AromaTru is a Revolutionary<br> New Waterless Diffuser</b><br><br>No counting drops, no adding water, no cleaning, no mold and bacteria build-up just pure diffusion — wherever and whenever you want it. AromaTru creates a relaxing, spa-like experience in your bedroom, living room, kitchen, office or den.<br><br>Use with AromaTru's USDA Organic or Wildcrafted oils. You can also use AromaTru with other brands of essential oils (packaged in standard 15 ml bottles).<br><br>AromaTru State of the Art Diffuser:");
        $(".img4 img").attr("src", "https://mojonow.blob.core.windows.net/cmr/t16219/src/c35993b2892d4348bea130f1fc841ba7_1.jpg");
        $(".img1 img").attr("src", "https://mojonow.blob.core.windows.net/cmr/t16219/src/26f2dcf30b7045eba5f5bbff13206a7b_1.jpg");
        $(".img1").removeClass("smartImg1");
        $(".threePay").removeClass("activePay");
        $(".onePay").addClass("activePay");
        $(".panelRow").hide(500);

        $(".difSelect, .smartSelect").hide();
        $(".oneNoFiSelectPay, .touchSelect").show();
    });

});