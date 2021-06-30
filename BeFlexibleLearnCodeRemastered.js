
$(function () {
  // uses Mojo native event handler checking if there are any offers and if not we add an error text
  mojoApp.hooks.add('offer_selection_send_offers_no_offers_to_submit', function() { 

      $(".errorMessage").text("Please select an offer");

   });

// clears error message when offer checkbox is selected
  $(".offer-checkbox").click(function(){
      $(".errorMessage").text("");

  });

// Mojo hook that adds the correct offer to the button
  mojoApp._hooks.add('offer_selection_send_offers', function (e) {
      // clear qty
      for (var offerId in e.offers) { // e.offers are offer properties
        var offer = getPageOffeById(parseInt(offerId)); // grabbing offer 
        var isSelected = offer.offerGroup != '' &&  // evaluates if offers are selected
            $('input[type=checkbox][data-group="'+offer.offerGroup+'"]').is(':checked') ||
            offer.offerGroup == '' && 
            ($('input[type=checkbox]:not([data-group])').is(':checked') ||
            $('input[type=checkbox]:checked').length == 0)

        if (isSelected){ 
          e.offers[offerId] = 1; // flags offer as selected
        }
        else{
          e.offers[offerId] = 0; // flags offer as unselected
        }
      }
      console.log(e.offers);
  });
});

function getPageOffeById(offerId) { // queries against page offers 
  if (typeof ___pageOffers !== 'object') return null;
  var result = [];
  for (var i = 0; i < ___pageOffers.length; ++ i){
    if (___pageOffers[i].offerId == offerId){
      return ___pageOffers[i];
    }
  }
  return null;
};

function getPageOffesByGroup(group) {
  if (typeof ___pageOffers !== 'object') return null;
  var result = [];
  for (var i = 0; i < ___pageOffers.length; ++ i){
    if (___pageOffers[i].offerGroup.toLowerCase() == group){
      result.push(___pageOffers[i].offerId);
    }
  }
  return result;
};










