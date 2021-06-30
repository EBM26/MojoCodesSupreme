
$(function () {

    $(".boxClick").click(function(){
        var group = $(this).prop("data-group");
        $(".boxClick").removeClass("active");
        $(this).addClass("active");
    });

      mojoApp.hooks.add('offer_selection_send_offers_no_offers_to_submit', function() { 
        $(".errorMessage").text("Please select an offer");
     });

    $(".boxClick").click(function(){
        $(".errorMessage").text("");

    });



   mojoApp._hooks.add('offer_selection_send_offers', function (e) {
      debugger;
      for (var offerId in e.offers) { // e.offers are offer properties
        var offer = getPageOffeById(parseInt(offerId)); // grabbing offer 
        var isSelected = offer.offerGroup != '' &&  // evaluates if offers are selected
            $('.boxClick[data-group="'+offer.offerGroup+'"]').hasClass('active') || 
            offer.offerGroup == '';

        if (isSelected){ 
          e.offers[offerId] = 1; // flags offer as selected
        }
        else{
          e.offers[offerId] = 0; // flags offer as unselected
        }
      }
      console.log(e.offers);
  });


function getPageOffeById(offerId) { // queries against page offers 
  if (typeof ___pageOffers !== 'object') return null;

  return ___pageOffers.find(function (po) {
    return po.offerId == offerId;
  });

};


});





