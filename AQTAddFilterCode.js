$(function () {
  mojoApp._hooks.add('offer_selection_send_offers', function (e) {
      // clear qty
      for (var offerId in e.offers) {
		  var offer = getPageOffeById(parseInt(offerId));
		  var isSelected = offer.offerGroup != '' && $('input[type=checkbox][data-group="'+offer.offerGroup+'"]').is(':checked') ||
							offer.offerGroup == '' && 
							($('input[type=checkbox]:not([data-group])').is(':checked') ||
								$('input[type=checkbox]:checked').length == 0)
        if (isSelected){
          e.offers[offerId] = 1;
        }
        else{
          e.offers[offerId] = 0;
        }
      }
      console.log(e.offers);
  });
});

function getPageOffeById(offerId) {
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