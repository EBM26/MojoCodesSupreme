$(function () {
if (typeof mojoApp !== 'undefined' && mojoApp.offerSelectionPage._sections.length) {
	for (var i = 0; i < mojoApp.offerSelectionPage._sections[0].offers.length; ++i) {
		var offer = mojoApp.offerSelectionPage._sections[0].offers[i];
		var mainSelect = $('select:eq(0)');

		if (offer.offerGroup.indexOf('Deluxe') >= 0 ) {			
				$('select:eq(0) option[value='+offer.offerId+']').remove();	
		}
	}
}
      
  $('#offerRegular').change(function() {
      changeData();
  });
  
  $('select:eq(0)').change(function() {
      changeData();
  });
  
  mojoApp._hooks.add('offer_selection_send_offers', function (e) {

	var isDeluxe = $('#offerRegular').is(':checked');
	var offersToSend = [];
	if (isDeluxe) {
		var deluxe = getEqualDeluxe($('select:eq(0)').val()).offerId;
		offersToSend.push(deluxe);
		offersToSend = offersToSend.concat(getAttachedOffers(deluxe));
	}
	else {
		offersToSend.push(parseInt($('select:eq(0)').val()));
 	    offersToSend = offersToSend.concat(getAttachedOffers($('select:eq(0)').val()));
	}


	for (var prop in e.offers) {
		if (e.offers.hasOwnProperty(prop)) {
			if (offersToSend.indexOf(parseInt(prop)) > -1) {
				e.offers[prop] = 1;
			}
			else {
				e.offers[prop] = 0;
			}
		}
	}

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
}

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

function getEqualDeluxe(offerId) {
	var offer = getPageOffeById(offerId);
	
	for (var i = 0; i < ___pageOffers.length; ++i) {
		if (___pageOffers[i].customFields["Main"] == offer.name) {
			return ___pageOffers[i];
		}
	}
}	

function getAttachedOffers(offerId) {
  if (typeof ___pageOffers !== 'object') return null;
  var result = [];
  for (var i = 0; i < ___pageOffers.length; ++ i){
    if (___pageOffers[i].parentOfferId == offerId && ___pageOffers[i].offerType=="Attached"){
      result.push(___pageOffers[i].offerId);
    }
  }
  return result;
}

function changeData()
{
    		let offerId = parseInt(offer$('select:eq(0)').val());
 if (offerId == 78412) {
            
                $('.product-title').html("RISK-FREE TRIAL");
                $('.product-sub-heading').html("Preferred Enrollment* (Save $100)");
                $('.pay-today').html("Pay only $8.95 S&amp;P Today");
                $(".productDesc").html("Receive two 30-scoop† bags every 60 days for ONLY $99.90 + $9.95 S&amp;P");
                $('.first-shipment').html("Your First Shipment Includes:");
                $('.two-weeks-bag-bullet').html("Two 30-scoop Bags");
                $('.free-14-bag').show();
                $('.free-14-bag').html("Free 14-scoop Bag");
                $('#OffName').html("Risk-Free Trial");
                $('#OffVIPPrice').html("$99.90");
                $('#ShipPrice').html("$8.95");
                $('#TotalPrice').html("$108.85");
                $('.todayOnly, .MCOffer').show();
                $('.bigPic img').attr("src","conjure_resource(2df28928cc994ef180f2e113b18fe056)");
                
         }
         
            else if (offerId == 78413) {
            
                $('.product-title').html("FAMILY PACK");
                $('.product-sub-heading').html("Preferred Enrollment* (Save $250)");
                $('.pay-today').html("Pay only $8.95 S&amp;P Today");
                $(".productDesc").html("Receive four 30-scoop† bags every 60 days for ONLY $159.80 + $9.95 S&amp;P");
                $('.first-shipment').html("Your First Shipment Includes:");
                $('.two-weeks-bag-bullet').html("Four 30-scoop Bags");
                $('.free-14-bag').show();
                $('.free-14-bag').html("Free 14-scoop Bag");
                $('.todayOnly, .MCOffer').show();
                $('#OffName').html("Family Pack");
                $('#OffVIPPrice').html("$159.80");
                $('#ShipPrice').html("$8.95");
                $('#TotalPrice').html("$168.75");
                $('.bigPic img').attr("src","conjure_resource(83ebcba7b9bc423483e51b5cf1ad5041)");
                
         }

            else if ($('select:eq(0)').find(":selected").val() == "78930") {
            
                $('.product-title').html("ONE 30-SCOOP BAG");
                $('.product-sub-heading').html("One Time Purchase*");
                $('.pay-today').html("$59.99 + $8.95 S&amp;P");
                $(".productDesc").html("");
                $('.first-shipment').html("Your Shipment Includes:");
                $('.two-weeks-bag-bullet').html("One 30-scoop† Bag");
                $('.free-14-bag, .MCOffer').hide();
                $('.todayOnly').hide();
                $('#OffName').html("One 30-Scoop Bag");
                $('#OffVIPPrice').html("$59.99");
                $('#ShipPrice').html("$8.95");
                $('#TotalPrice').html("$68.94");
                $('.bigPic img').attr("src","conjure_resource(194c673a80de4375b63307d1a0b909e8)");

         }
         
        var isDeluxe = $('#offerRegular').is(':checked');
  		let offer = getPageOffeById(offerId);
        if (isDeluxe)
        {
          offer = getEqualDeluxe(offerId);
        }
          $('#OffVIPPrice').html("$"+offer.price);
          $('#ShipPrice').html("$"+offer.shippingPrice);
          var total = offer.price + offer.shippingPrice;
          $('#TotalPrice').html("$"+total.toFixed(2));
}