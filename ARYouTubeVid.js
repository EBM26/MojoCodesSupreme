(function () {
    var thumbnail = document.querySelector("#id374808-2956 .widget-video__container .widget-video__thumbnail");
    if (thumbnail) {
        thumbnail.addEventListener("click", function () {
            document.querySelector("#id374808-2956 .widget-video__container").innerHTML =
                '<iframe class="widget-video__frame" src="https://www.youtube.com/embed/z6_ZzjLi7Jg?autoplay=1&wmode=transparent&rel=0&showinfo=0&mute=0&enablejsapi=1" frameborder="0" allowfullscreen="true" allow="autoplay; fullscreen"></iframe>';
        });
    }
})();



widget-video__frame





  $(document).ready(function() {


     $(".YTsec").click(function() {
         $(this).hide();
         $(".videoSec").show();
     });
            
});