 $(document).ready(function() {
  
   $(".WifiDiv").click(function() {
      $(".selectDiv").removeClass("activeDiv");
      $(this).addClass("activeDiv");
      $(".circleDiv").removeClass("activeCircle");
      $(".smartCircle").addClass("activeCircle");
      $(".copyChange1").html("<b>AromaTru is a Revolutionary<br>New Waterless Diffuser</b><br><br>No counting drops, no adding water, no mold and bacteria build-up just pure diffusion—wherever and whenever you want it...your bedroom, living room, kitchen, office or den.<br><br> You can also use AromaTru manually with other brands of essential oils (packaged in standard 15 ml bottles).<br><br>AromaTru State of the Art Diffuser:");
      $(".img3 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t16219/src/61f0daa1735045b4b5e87f170ecaae72_1.jpg");
      $(".img1 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t16219/src/633211f70de8498e96dc1bd816fb6423_1.jpg");
      $(".img1").addClass("smartImg1");
      $(".touchSelect, .paymentRow").hide();
      $(".smartSelect, .selectRow").show();
      $(".nextStep").html("Select from 3 beautiful shades to match every decor");
      $(".productCol").removeClass("activeProduct");
      $(".bambooCol").addClass("activeProduct");
      $(".finalSelect").hide();
      $(".BambooWifiOnePay").show();
      $(".paymentP").html("Order your Bamboo diffuser in one full payment of $249.95");
      
   });

    $(".NofiDiv").click(function() {
      $(".selectDiv").removeClass("activeDiv");
      $(this).addClass("activeDiv");
      $(".circleDiv").removeClass("activeCircle");
      $(".touchCircle").addClass("activeCircle");
      $(".copyChange1").html("<b>AromaTru is a Revolutionary<br> New Waterless Diffuser</b><br><br>No counting drops, no adding water, no cleaning, no mold and bacteria build-up just pure diffusion — wherever and whenever you want it. AromaTru creates a relaxing, spa-like experience in your bedroom, living room, kitchen, office or den.<br><br>Use with AromaTru's USDA Organic or Wildcrafted oils. You can also use AromaTru with other brands of essential oils (packaged in standard 15 ml bottles).<br><br>AromaTru State of the Art Diffuser:");
      $(".img3 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t16219/src/c35993b2892d4348bea130f1fc841ba7_1.jpg");
      $(".img1 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t16219/src/26f2dcf30b7045eba5f5bbff13206a7b_1.jpg");
      $(".img1").removeClass("smartImg1");
      $(".smartSelect, .paymentRow").hide();
      $(".touchSelect, .selectRow").show();
      $(".nextStep").html("Select from 3 beautiful shades to match every decor");
      $(".bambooCol").addClass("activeProduct");
      $(".productCol").removeClass("activeProduct");
      $(".finalSelect").hide();
      $(".BambooNofiOnePay").show();
      $(".paymentP").html("Order your Bamboo diffuser in one full payment of $199.95");
   });
   
  $(".productCol").click(function() {
      $(".productCol").removeClass("activeProduct");
      $(this).addClass("activeProduct");
      $(".paymentRow").show();
      $(".selectRow").hide();
      $(".nextStep").html("How would you like to pay?");
      payOneSwitch();

  });

  $(".onePay").click(function() {
      $(".threePay").removeClass("activePay");
      $(this).addClass("activePay");
      payOneSwitch();

   });

    $(".threePay").click(function() {
      $(".onePay").removeClass("activePay");
      $(this).addClass("activePay");
      payThreeSwitch();

   });
  
  function payOneSwitch() {
          if ( $(".bambooCol").hasClass("activeProduct") && $(".NofiDiv").hasClass("WifiDiv") ) {
          $(".finalSelect").hide();
          $(".BambooNofiOnePay").show();
          $(".paymentP").html("Order your Bamboo diffuser in one full payment of $199.95");
      }

      if ( $(".bambooCol").hasClass("activeProduct") && $(".WifiDiv").hasClass("WifiDiv") ) {
          $(".finalSelect").hide();
          $(".BambooWifiOnePay").show();
          $(".paymentP").html("Order your Bamboo diffuser in one full payment of $249.95");
      }

      if ( $(".marbleCol").hasClass("activeProduct") && $(".NofiDiv").hasClass("WifiDiv") ) {
          $(".finalSelect").hide();
          $(".MarbleNofiOnePay").show();
          $(".paymentP").html("Order your Marble diffuser in one full payment of $199.95");
      }

      if ( $(".marbleCol").hasClass("activeProduct") && $(".WifiDiv").hasClass("WifiDiv") ) {
          $(".finalSelect").hide();
          $(".MarbleWifiOnePay").show();
          $(".paymentP").html("Order your Marble diffuser in one full payment of $249.95");
      }

      if ( $(".walnutCol").hasClass("activeProduct") && $(".NofiDiv").hasClass("WifiDiv") ) {
          $(".finalSelect").hide();
          $(".WalnutNofiOnePay").show();
          $(".paymentP").html("Order your Walnut diffuser in one full payment of $199.95");
      }

      if ( $(".walnutCol").hasClass("activeProduct") && $(".WifiDiv").hasClass("WifiDiv") ) {
          $(".finalSelect").hide();
          $(".WalnutWifiOnePay").show();
          $(".paymentP").html("Order your Walnut diffuser in one full payment of $249.95");
      }
  };

   function payThreeSwitch() {
               if ( $(".bambooCol").hasClass("activeProduct") && $(".NofiDiv").hasClass("WifiDiv") ) {
          $(".finalSelect").hide();
          $(".BambooNofiThreePay").show();
          $(".paymentP").html("Order your Bamboo diffuser in 3 easy payments of $66.65");
      }

      if ( $(".bambooCol").hasClass("activeProduct") && $(".WifiDiv").hasClass("WifiDiv") ) {
          $(".finalSelect").hide();
          $(".BambooWifiThreePay").show();
          $(".paymentP").html("Order your Bamboo diffuser in 3 easy payments of $83.32");
      }

      if ( $(".marbleCol").hasClass("activeProduct") && $(".NofiDiv").hasClass("WifiDiv") ) {
          $(".finalSelect").hide();
          $(".MarbleNofiThreePay").show();
          $(".paymentP").html("Order your Marble diffuser in 3 easy payments of $66.65");
      }

      if ( $(".marbleCol").hasClass("activeProduct") && $(".WifiDiv").hasClass("WifiDiv") ) {
          $(".finalSelect").hide();
          $(".MarbleWifiThreePay").show();
          $(".paymentP").html("Order your Marble diffuser in 3 easy payments of $83.32");
      }

      if ( $(".walnutCol").hasClass("activeProduct") && $(".NofiDiv").hasClass("WifiDiv") ) {
          $(".finalSelect").hide();
          $(".WalnutNofiThreePay").show();
          $(".paymentP").html("Order your Walnut diffuser in 3 easy payments of $66.65");
      }

      if ( $(".walnutCol").hasClass("activeProduct") && $(".WifiDiv").hasClass("WifiDiv") ) {
          $(".finalSelect").hide();
          $(".WalnutWifiThreePay").show();
          $(".paymentP").html("Order your Walnut diffuser in 3 easy payments of $83.32");
      }
  };

    
});