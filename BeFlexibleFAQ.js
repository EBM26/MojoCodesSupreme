    $(document).ready(function() {

        $(".titleDiv").click(function(){

            $(".answerDiv").slideUp("").removeClass("activeDiv");
            $(".plusSign").removeClass("transition");
            $(this).find(".answerDiv").slideDown("");
            $(this).find(".plusSign").addClass("transition");

        });
    });