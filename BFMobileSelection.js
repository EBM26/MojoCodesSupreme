$(document).ready(function() {

    $(".leftCol").click(function(){
        $(".rightCol").removeClass("activeCol");
        $(this).addClass("activeCol");
        $(".OTPRow").hide();
        $(".RFTRow").show();
    })

    $(".rightCol").click(function(){
        $(".leftCol").removeClass("activeCol");
        $(this).addClass("activeCol");
        $(".OTPRow").show();
        $(".RFTRow").hide();
    })

});


