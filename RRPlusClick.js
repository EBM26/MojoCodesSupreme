
$(document).ready(function() {

      var whitePlus = "https://mojonow.blob.core.windows.net/cmr/t14971/src/30aed4d1b75940199835491d2ee2585e_1.png";
      var brownPlus = "https://mojonow.blob.core.windows.net/cmr/t14971/src/90e7eabd32844d9e97a1cc6bc182197f_1.png";

   $(".bubbleRow").click(function() {
       $(".bubbleText").removeClass("activeBubble");
       $(".plusIMG img").attr("src", whitePlus);
       $(this).find(".bubbleText").addClass("activeBubble");
       $(this).find(".plusIMG img").attr("src", brownPlus);
   });
            
});