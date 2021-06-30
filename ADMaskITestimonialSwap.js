$(document).ready(function() {

        var firstImage = "https://mojonow.blob.core.windows.net/cmr/t5720/src/69a169fddc6241288a0cfc0aab1cf8dc_1.jpg";
        var secondImage = "https://mojonow.blob.core.windows.net/cmr/t5720/src/268f66fd6a1b42f1931a516ac8b81fa2_1.jpg";
        var thirdImage = "https://mojonow.blob.core.windows.net/cmr/t5720/src/9a25c83f556c4f44a17058d10ff4c258_1.jpg";

        var rotateOne = function() {
            $(".imageMiddle img").attr("src", firstImage);
            $(".imageLeft img").attr("src", thirdImage);
            $(".imageRight img").attr("src", secondImage);
            $(".midText").html('WORLD HARVEST<br><span style="font-size: 18px;" class="smallText">Feeding Los Angeles One Family at a Time</span>');
        };

        var rotateTwo = function() {
            $(".imageMiddle img").attr("src", secondImage);
            $(".imageLeft img").attr("src", firstImage);
            $(".imageRight img").attr("src", thirdImage);
            $(".midText").html('COMMUNITY HOUSE SYLMAR<br><span style="font-size: 18px;" class="smallText">Ending Homelessness One Person at a Time</span>');
        };

        var rotateThree = function() {
            $(".imageMiddle img").attr("src", thirdImage);
            $(".imageLeft img").attr("src", secondImage);
            $(".imageRight img").attr("src", firstImage);
            $(".midText").html('CARBON HEALTH');
        };

        var intervalFunctions = [ rotateOne, rotateTwo, rotateThree ];
        var intervalIndex = 0;
        window.setInterval(function(){
          intervalFunctions[intervalIndex++ % intervalFunctions.length]();
        }, 5000);

});