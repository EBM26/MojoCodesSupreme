$(function () {
  mojoApp._hooks.add('offer_selection_send_offers', function (e) {
    var isAddConvenientAutoship = $('[name="offer-checkbox"]').is(':checked');
    var offersSupplyAutoship = getPageOffesByGroup('checkbox');

    if (offersSupplyAutoship.length) {
      // clear qty
      for (var offerId in e.offers) {
        var isSelected = isAddConvenientAutoship && offersSupplyAutoship.indexOf(parseInt(offerId)) > -1 || 
                !isAddConvenientAutoship && offersSupplyAutoship.indexOf(parseInt(offerId)) == -1;
        if (isSelected){
          e.offers[offerId] = 1;
        }
        else{
          e.offers[offerId] = 0;
        }
      }
    }
  });
});

function getPageOffesByGroup(group) {
  if (typeof ___pageOffers !== 'object') return null;
  var result = [];
  for (var i = 0; i < ___pageOffers.length; ++ i){
    if (___pageOffers[i].offerGroup.toLowerCase() == group){
      result.push(___pageOffers[i].offerId);
    }
  }
  return result;
}

 $(document).ready(function() {
  $(".faq-div").click(function(){

    if(!$(this).hasClass("active")) {
      $(".faq-div").removeClass("active");
      $(".text-box").slideUp("slow");
      $(".arrow-icon").removeClass("transition");
      $(this).addClass("active");
      $(this).find(".text-box").slideDown("slow");
      $(this).find(".arrow-icon").addClass("transition");
      }

        else if($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(".text-box").slideUp("slow");
        $(".arrow-icon").removeClass("transition");
        }
       
  });
}); 