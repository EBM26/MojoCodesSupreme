

$(document).ready(function() {

   $(".plusIMG2").click(function() {
    $(".plusIMG2 img").attr("src", "https://mojonow.blob.core.windows.net/cmr/t14710/src/6e5a388ba7dc4a8a885f2b3197141c10_1.png");
    $(".infoText").css("color", "#2B753A");
    $(".hideText").slideUp();
    $(this).find("img").attr("src", "https://mojonow.blob.core.windows.net/cmr/t14710/src/ab23737122484fa696e4caaf0ec1e8fb_1.png");
    $(this).next("div").find(".infoText").css("color", "#E44E36");
    $(this).next("div").next("div").find(".hideText").slideDown();
   })


});