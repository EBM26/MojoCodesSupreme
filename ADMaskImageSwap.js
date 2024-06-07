      $(document).ready(function() {

     $(".colorIcon").click(function() {
          if ($(this).hasClass("bambooIcon")) {
               $(".selectSec").hide();
               $(".colorIcon").removeClass("activeIcon");
               $(".prodcutImage img").attr("src","https://mojonow.blob.core.windows.net/cmr/t12053/src/80c4f77e7546401eb926ce93a28c0dc1_1.jpg");
               $(".bambooSelect").css("display", "flex");
               $(this).addClass("activeIcon");
               $(".difText").html("Bamboo");
          }

          else if ($(this).hasClass("walnutIcon")) {
               $(".colorIcon").removeClass("activeIcon");
               $(".selectSec").hide();
               $(".prodcutImage img").attr("src","https://mojonow.blob.core.windows.net/cmr/t12053/src/6334dbc955834ecd997be8e2e1312c2c_1.jpg");
               $(".walnutSelect").css("display", "flex");
               $(this).addClass("activeIcon");
               $(".difText").html("Walnut");
          }

          else  {
               $(".colorIcon").removeClass("activeIcon");
               $(".selectSec").hide();
               $(".prodcutImage img").attr("src","https://mojonow.blob.core.windows.net/cmr/t12053/src/bcb88516a2d44b608ada9ac187231c9b_1.jpg");
               $(".marbleSelect").css("display", "flex");
               $(this).addClass("activeIcon");
               $(".difText").html("Marble");
          }
     });
            
});

