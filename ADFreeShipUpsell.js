const upsellMap = {
	81534: 81535,
	origOff: upsellOff,
}
mojoApp._hooks.add('upsell_form_send_offers_filter', function(e, offers) {
    // for (var offerId in offers) {    
    //     if (isOldOffer(offerId)){
    //         offers[offerId] = 0;
    //     }
   //}
   offers[81534] = 0;
   offers[81535] = offers[81535] + 1;
   console.log(offers);
    return offers;
});