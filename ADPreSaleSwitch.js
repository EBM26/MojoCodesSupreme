
$(document).ready(function() {

    $(".smallPic1").click(function() {
         $(".bigPic img").show();
         $(".bigPic").addClass("bigImageFirst");
         $(".videoCustom1000").hide();
         $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t11373/src/1b6c2127e8cb47c3acc5546093ecc45d_1.png");

    });

    $(".smallPic2").click(function() {
         $(".bigPic img").show();
         $(".bigPic").removeClass("bigImageFirst");
         $(".videoCustom1000").hide();
         $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t10919/src/ff6881d4b4a84c8da04e138c6af970b5_1.jpg");

    });
    
    $(".smallPic3").click(function() {
         $(".bigPic img").show();
         $(".bigPic").removeClass("bigImageFirst");
         $(".videoCustom1000").hide();
         $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t10919/src/d7b0f928723e40469a629457ed555084_1.jpg");

    });

    $(".smallPic4").click(function() {
         $(".bigPic img").hide();
         $(".bigPic").removeClass("bigImageFirst");
         $(".videoCustom1000").show();

    });
            
});