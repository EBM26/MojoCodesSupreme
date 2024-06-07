$(document).ready(function() {

   $(".clickIMGE").click(function() {
     var insideImg = $(this).find("img").attr('src');
     $(".bigPicE img").attr('src', insideImg);
     $(".3000VidE").hide();
     $(".bigPicE img").show();
     $(".bigPicE").removeClass("thinPicE");

     if ($(this).hasClass("img1")) {
        $(".bigPicE").addClass("thinPicE");
     }

     if ($(this).hasClass("img4")) {
        $(".bigPicE img").hide();
        $(".bigPicE").removeClass("thinPicE");
        $(".3000VidE").show();
     }

   });

});


$(document).ready(function() {

   $(".clickIMG").click(function() {
     var insideImg = $(this).find("img").attr('src');
     $(".bigPic img").attr('src', insideImg);

   });

});