$(function () {
  
  $('#offer-checkboxUltra').click(function() {

     $('.totalRow').show();
     $('#offer-checkbox, #offerRegular').prop('checked', false);
     $('.bottleIMG img').attr("src","https://mojonow.blob.core.windows.net/cmr/t4475/src/a8a3e184ec134af5a788eaf61708467a_1.png");
     $('#OffName').html("7-day BeFlexible Ultra Challenge");
     $('#OffPrice').html("$99.90");
     $('#TotalPrice').html("$109.85");
     $('.logoIMG img').attr("src","https://mojonow.blob.core.windows.net/cmr/t4212/src/3b7530be3354487bac5e7e894467c7ad_1.png");
   });

   $('#offer-checkbox').click(function() {

     $('.totalRow').show();
     $('#offer-checkboxUltra, #offerRegular').prop('checked', false);
     $('.bottleIMG img').attr("src","https://mojonow.blob.core.windows.net/cmr/t4475/src/34e6d825a4044315b1756a98102330fd_1.png");
     $('#OffName').html("7-day BeFlexible Challenge");
     $('#OffPrice').html("$79.90");
     $('#TotalPrice').html("$84.90");
     $('.logoIMG img').attr("src","https://mojonow.blob.core.windows.net/cmr/t3743/src/e2a0bbe139684993b6e71c2d07b562a9_1.png");

   });

});


    