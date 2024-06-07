$(document).ready(function() {

    $(".pic1").click(function() {
         $(".bigPic img").show();
         $(".topVideo").hide();
         $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t10805/src/bcc59f32db2c41d3b1b82d20f8d4a5b5_1.png");

    });

    $(".pic2").click(function() {
         $(".bigPic img").show();
         $(".topVideo").hide();
         $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t10805/src/2e7bd3ae3ce54e0589eecc8a96ffcbf8_1.png");

    });
    
    $(".pic3").click(function() {
         $(".bigPic img").show();
         $(".topVideo").hide();
         $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t10805/src/cc672dc57e6e4538b66351d703a16e9e_1.png");

    });

     $(".pic4").click(function() {
         $(".bigPic img").hide();
         $(".topVideo").show();

    });
            
});



