$(document).ready(function() {

    $(".image1").click(function() {
         $(".bigPic").show();
         $(".vid1").hide();
         $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t12828/src/d8eb09ac064042ec93e44b2aa6427669_1.jpg");

    });

    $(".image2").click(function() {
         $(".bigPic").show();
         $(".vid1").hide();
         $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t12828/src/7a0201e4d4314d70b3d37648dc2bff3a_1.jpg");

    });
    
    $(".image3").click(function() {
        $(".bigPic").hide();
         $(".vid1").show();
    });
            
});