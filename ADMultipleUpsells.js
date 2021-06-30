$(document).ready(function() {

	mojoApp._hooks.add('upsell_form_send_offers_filter', function (value, options) {
		var offersToSend = {};
		var checkboxes = $("input[type=checkbox]:checked").each(function(index, cb){
	    	var SKU = $(cb).data("offersku");
	    	var qty = $("#qty-" + SKU).val();
	    	var offer = getOfferbySKU(SKU);
	    	if (offer) {
	    	   offersToSend[offer.offerId] = qty || 1;
	    	}
	    	
	 	});
		return offersToSend;
	});

	function getOfferbySKU(sku){
		return ___pageOffers.find(function(offer){
			return offer.offerSku === sku;
		});
	}
			
					
 });