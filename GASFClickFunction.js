$(function () {
    
    $('#oneScoop').click(function() {

         $('.totalRow').show();
         $('#riskFree, #familyPack').prop('checked', false);
         $('#OffName').html("One 30-Scoop Bags");
         $('#OffVIPPrice').html("$59.90");
         $('#TotalPrice').html("$68.85");
         $('.bigPic img').attr("src","https://mojonow.blob.core.windows.net/cmr/t4446/src/6789608796374748bc7ce2fca39e0333_1.jpg");
    });

   $('#riskFree').click(function() {

         $('.totalRow').show();
         $('#oneScoop, #familyPack').prop('checked', false);
         $('#OffName').html("Two 30-Scoop Bags");
         $('#OffVIPPrice').html("$99.90");
         $('#TotalPrice').html("$108.85");
         $('.bigPic img').attr("src","https://mojonow.blob.core.windows.net/cmr/t4446/src/978a73651d384b339529ced7d4fea7d1_1.jpg");

   });

    $('#familyPack').click(function() {

         $('.totalRow').show();
         $('#oneScoop, #riskFree').prop('checked', false);
         $('#OffName').html("Four 30-Scoop Bags");
         $('#OffVIPPrice').html("$159.80");
         $('#TotalPrice').html("$168.75");
         $('.bigPic img').attr("src","https://mojonow.blob.core.windows.net/cmr/t4446/src/404c1124f9f642b3b228d7e9bfc32b9b_1.jpg");

   });

});


