 $(document).ready(function() {

   $(".clickIMG").click(function() {
     var insideImg = $(this).find("img").attr('src');
     $(".prodcutImage img").attr('src', insideImg);
   });

});




 $(document).ready(function() {

   $(".clickIMGF").click(function() {
     var insideImg = $(this).find("img").attr('src');
     $(".bigPicF img").attr('src', insideImg);
     $(".videoCustomF").hide();
     $(".bigPicF img").show();
     $(".bigPicF").removeClass("thinImg2");

     if ($(this).hasClass("img1")) {
        $(".bigPicF").addClass("thinImg2");
     }

     if ($(this).hasClass("img4")) {
        $(".bigPicF img").hide();
        $(".bigPicF").removeClass("thinImg2");
        $(".videoCustomF").show();
     }

   });

});



 $(document).ready(function() {

   $(".clickIMG").click(function() {
     if ($(this).hasClass("firstIMG")) {
        $(".mellowYellow").show();
     }
     
     var insideImg = $(this).find("img").attr('src');
     $(".prodcutImage img").attr('src', insideImg);
     $(".mellowYellow").hide();
   });

});



 $(document).ready(function() {

   $(".clickIMG").click(function() {
    var insideImg = $(this).find("img").attr('src');
     $(".prodcutImage img").attr('src', insideImg);

     if ($(this).hasClass("bottleIMG")) {
        $(".prodcutImage").addClass("bottleWidth");
     }
     else {

         $(".prodcutImage").removeClass("bottleWidth");
         }
   });

}); 



