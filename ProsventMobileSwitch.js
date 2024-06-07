$(document).ready(function() {

 $(".leftCircle").click(function() {
    $(".rftRow").show();
    $(".loadRow").hide();
    $(".insideLeftCircle").addClass("activeCircle");
    $(".insideRightCircle").removeClass("activeCircle");
    $(".topLeftCol").addClass("leftCol").removeClass("rightCol");
    $(".topRightCol").removeClass("leftCol").addClass("rightCol");
   });

 $(".rightCircle").click(function() {
    $(".rftRow").hide();
    $(".loadRow").show();
    $(".insideLeftCircle").removeClass("activeCircle");
    $(".insideRightCircle").addClass("activeCircle");
    $(".topLeftCol").removeClass("leftCol").addClass("rightCol");
    $(".topRightCol").addClass("leftCol").removeClass("rightCol");
   });
    
});

