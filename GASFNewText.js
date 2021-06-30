$(function(){
    var sections = mojoApp.offerSelectionPage._sections.map(function(s){
        return s.offers.map(function(o){ return o.offerId; });
    });
    
    var mainSectionNumber = sections.length - 1;
    var barsSectionNumber = 0;
    var deluxeOfferGroup = 'Deluxe';
    var mainOffers = [];
    var deluxeOffers = [];

    for (var i = 0; i < sections[mainSectionNumber].length; ++i) {
        var offer = getPageOfferById(sections[mainSectionNumber][i]);
        if (offer != null && offer.offerType == 'Ordinary') {
            if (offer.offerGroup === deluxeOfferGroup) {
                deluxeOffers.push(offer.offerId);
            }
            else {
                mainOffers.push(offer.offerId);
            }
        }
    }

        
    var ind = 0;
    $('.btnChoice').each(function(){
        $(this).data('offer-id', mainOffers[ind++ % mainOffers.length]);
    }).click(function(){
        var offerId = $(this).data('offer-id');
        var isDeluxe = $('#offerDeluxe').is(':checked');
        replaceText(offerId, isDeluxe);
        if(isDeluxe){
            var deluxeOffer = getDeluxeOffer(offerId);
            if (deluxeOffer != null){
                offerId = deluxeOffer.offerId;
            }   
        }
        
        $('select', $(mojoApp.offerSelectionPage._offerSelector, $(mojoApp.offerSelectionPage._sections[mainSectionNumber].tag))).val(offerId);
        $('.btnChoice').removeClass('btnActive');
        $(this).addClass('btnActive');
        
         $('.cta-btn-main').click();
            
    });
    
    $('#offerDeluxe').on('change', function(){
        if(mojoApp.cart._cartState.CartOffers.length){
            var mainOffer = null;
            if ($(this).is(':checked')){
                var curMainOffer = mojoApp.cart._cartState.CartOffers.find(function(o) { return mainOffers.indexOf(o.OfferId) > -1 });
                mainOffer = getDeluxeOffer(curMainOffer.OfferId);
            }
            else {
                var curMainOffer = mojoApp.cart._cartState.CartOffers.find(function(o) { return deluxeOffers.indexOf(o.OfferId) > -1 });
                mainOffer = getRegularOffer(curMainOffer.OfferId);
            }
            if (mainOffer != null){
                var offers = {};
                for (var i = 0; i < sections[mainSectionNumber].length; ++i){
                    var offerId = sections[mainSectionNumber][i];                   
                    var qty = offerId  === mainOffer.offerId ? 1 : 0;
                    offers[offerId] = qty;
                }
                setOfferQuantity({offers: offers});
            }
        }
        var selectedOffer = parseInt($('select', $(mojoApp.offerSelectionPage._offerSelector, $(mojoApp.offerSelectionPage._sections[mainSectionNumber].tag))).val());
        replaceText(selectedOffer , $(this).is(':checked'));
        var newOffer = $(this).is(':checked') ? getDeluxeOffer(selectedOffer) : getRegularOffer(selectedOffer);
        $('select', $(mojoApp.offerSelectionPage._offerSelector, $(mojoApp.offerSelectionPage._sections[mainSectionNumber].tag))).val(newOffer.offerId);
    }); 
   
  mojoApp._hooks.add('offer_selection_add_to_cart_click', function(e){
    console.log(e)
  });

  mojoApp._hooks.add('offer_selection_add_to_cart_offers_added', function (e) {
    console.log(e);
    setOfferQuantity(e);
  });

  mojoApp._hooks.add('offer_selection_add_to_cart_error', function (e) {
    console.log(e);
  });

  mojoApp._hooks.add('mojo_cart_updated', function (e) {
    var mainOffer = e.cart._cartState.CartOffers.find(function(o) { return mainOffers.indexOf(o.OfferId) > -1 || deluxeOffers.indexOf(o.OfferId) > -1; });  
    var mainOffersPrice = 0;
    if (mainOffer != null){ 
        var parsePrices = mainOffer.OfferName.match(/(\d+\.\d{1,2})/);
        mainOffersPrice = parsePrices !== null && parsePrices.length ? parseFloat(parsePrices[0]) : null;
        if (mainOffersPrice == null){
            var allMainOffers = e.cart._cartState.CartOffers.filter(function(o) { return sections[mainSectionNumber].indexOf(o.OfferId) > -1; });   
            mainOffersPrice = allMainOffers.reduce(function(sum, o){ return sum + o.Price; }, 0);
        }
    }
    var barsOffers = e.cart._cartState.CartOffers.filter(function(o) { return sections[barsSectionNumber].indexOf(o.OfferId) > -1; });
    var barsOffersPrice = barsOffers.reduce(function(sum, o){ return sum + o.Price; }, 0);

    if (mainOffer) {
      $('.main-offer-row').show();
      $('.row-free-gifts').show();
      $('#OffName').text(mainOffer.Title);
      $('#OffVIPPrice').text(`$${mainOffersPrice.toFixed(2)}`);
    } else {
      $('.main-offer-row').hide();
      $('.row-free-gifts').hide();
    }
    if (barsOffers.length > 0) {
      $('.row-superfood-bars').show();
      $('#bars').text(`Superfood Bars (${barsOffers.reduce(function(sum, o){ return sum + o.Quantity; }, 0)})`);
      $('#bars-price').text(`$${barsOffersPrice.toFixed(2)}`);
    } else {
      $('.row-superfood-bars').hide();
    }
    $('#ShipPrice').text(`$${e.cart._cartState.OrderShippingPrice.toFixed(2)}`);
    $('#TotalPrice').text(`$${(mainOffersPrice + barsOffersPrice + e.cart._cartState.OrderShippingPrice).toFixed(2)}`);
    $('#TotalPay').text(`$${e.cart._cartState.FirstPaymentAmount.toFixed(2)}`);
    
    // restore checkbox state on page reload
    var deluxeOffer = e.cart._cartState.CartOffers.find(function(o) { return deluxeOffers.indexOf(o.OfferId) > -1 });
    if(typeof deluxeOffer !== 'undefined'){
        $('#offerDeluxe').prop('checked', true);
    }
  });

  function setOfferQuantity(e) {
    var offerId = Number(Object.keys(e.offers).find(function(o){ 
        var offer = getPageOfferById(parseInt(o));
        return offer.offerType !== 'Attached' && e.offers[o] > 0; 
    }));
    var offerQty = e.offers[offerId];
    var section = sections.find(function(s){ return s.indexOf(offerId) > -1; });
    var sectionNumber = sections.findIndex(function(s){ return s.indexOf(offerId) > -1; });
    if (sectionNumber != mainSectionNumber){
        return;
    }
    var offers = section.map(function(o){ 
        var curOffer = getPageOfferById(o);
        var qty = o === offerId || curOffer.offerType === "Attached" && curOffer.parentOfferId == offerId ? offerQty : 0;
        return { offer: o, quantity: qty }; 
    });
    
    
    mojoApp.cart._inRequest = true;
    $.ajax({
      type: "POST",
      url: 'cart/SetOffersQuantity/',
      traditional: true,
      data: { offers: JSON.stringify(offers), withCartReset: false, stepNumber: window.location.pathname.match(/step\d$/) },
      success: function (data) {
        mojoApp.cart._cartState = data;
        mojoApp.cart._inRequest = false;
        mojoApp._hooks.action('mojo_cart_updated', { cart: mojoApp.cart });
      },
      error: function (e) {
        mojoApp.cart._inRequest = false;
      }
    });
  }
  
  function getDeluxeOffer(curOfferId){
        var selectedOffer = getPageOfferById(curOfferId);
        for (var i = 0; i < sections[mainSectionNumber].length; ++i){
            var offer = getPageOfferById(sections[mainSectionNumber][i]);
            if (offer != null && offer.offerGroup === deluxeOfferGroup && offer.customFields['Main'] == selectedOffer.name){
                return offer;
            }
        }   
        return null;
    }

    function getRegularOffer(curOfferId){
        var selectedOffer = getPageOfferById(curOfferId);
        for (var i = 0; i < sections[mainSectionNumber].length; ++i){
            var offer = getPageOfferById(sections[mainSectionNumber][i]);
            if (offer != null && offer.offerGroup !== deluxeOfferGroup && selectedOffer.customFields['Main'] == offer.name){
                return offer;
            }
        }   
        return null;
    }
});



function getPageOfferById(offerId) {
  if (typeof ___pageOffers !== 'object') return null;
  var data = ___pageOffers.filter(function (o) { return o.offerId === offerId; });
  return data.length ? data[0] : null;
};

function getPageOffersByGroup(group) {
  if (typeof ___pageOffers !== 'object') return [];
  return ___pageOffers
    .filter(function (o) { return o.customFields.hasOwnProperty('group') && o.customFields.group.toLowerCase() === group.toLowerCase() })
    .map(function(o) { return o.offerId; });
};
    function replaceText(offerId, isDeluxe) {   
    var offer = getPageOfferById(offerId);  
    if (offer.trackingName == "Risk-Free Trial" || offer.trackingName.includes("Risk Free Trial")) {    
        $('.product-title').html("RISK-FREE TRIAL");    
        $('.pay-today-lbl').html("YOU ONLY PAY $8.95 S&amp;H TODAY");   
        $('.bigPic img').attr("src","conjure_resource(55253a67d4284838aea166e9a07a5cc6)");
        if (isDeluxe) { 
            $('.two-weeks-bag-bullet').html("Two 30-scoop Ultra Bag");  
        $(".prodDesc").html("Experience the benefits of Grown American for 30 days. Cancel any time within 30 days. After 30 days we will charge you $99.90 ($49.95/bag) and also enroll you to receive a 2-month supply every 60 days. Your First Shipment will include Free 14-day bag plus a 2-month supply, a Free Shaker Cup and “2 Weeks To Super” Recipe Book."); 
        } else {    
            $('.two-weeks-bag-bullet').html("Two 30-scoop Bags");   
        $(".prodDesc").html("Experience the benefits of Grown American for 30 days. Cancel any time within 30 days. After 30 days we will charge you $99.90 ($49.95/bag) and also enroll you to receive a 2-month supply every 60 days. Your First Shipment will include Free 14-day bag plus a 2-month supply, a Free Shaker Cup and <i>“2 Weeks To Super”</i> Recipe Book.");  
        }   
        $('.free-14-bag').show();   
        $('.free-14-bag').html("Free 14-scoop Bag");    
    }   
    else if (offer.trackingName == "Family Pack" || offer.trackingName.includes("Family Pack")) {   
        $('.product-title').html("FAMILY PACK");    
        $('.pay-today-lbl').html("PAY ONLY $8.95 S&H TODAY (SAVE $120)");   
        $('.bigPic img').attr("src","conjure_resource(bed59987b51b489aa1aa1e65a165bb7f)");          
        $('.first-shipment').html("Your First Shipment Includes:"); 
        if (isDeluxe) { 
            $('.two-weeks-bag-bullet').html("Four 30-scoop Ultra Bags");    
            $(".prodDesc").html("Receive four 30-scoop bags every 60 days for ONLY $179.80 + $9.95 S&P Your First Shipment Includes:"); 
        } else {    
            $('.two-weeks-bag-bullet').html("Four 30-scoop Bags");  
            $(".prodDesc").html("Receive four 30-scoop bags every 60 days for ONLY 39.95 per bag (You pay a total of $159.80 + $9.95 S&H).  Your First Shipment will include a Free 14-day bag plus 4-month supply (4 bags), a Free Shaker Cup and <i>“2 Weeks To Super”</i> Recipe Book.");    
        }   
        $('.free-14-bag').show();   
        $('.free-14-bag').html("Free 14-scoop Bag");    
    }   
    else if (offer.trackingName == "One 30-Scoop Bag") {    
        $('.product-title').html("ONE 30-SCOOP BAG");   
        $('.product-sub-heading').html("One Time Purchase*");   
        $(".prodDesc").html("Your Shipment will include a 1-month supply of Grown American superfood along with a Free Shaker Cup and <i>“2 Weeks To Super”</i> Recipe Book."); 
        $('.first-shipment').html("Your Shipment Includes:");
        $('.bigPic img').attr("src","conjure_resource(0d0925e4bad444fe8df8fc09ed2bf274)");  
        if (isDeluxe) { 
            $('.two-weeks-bag-bullet').html("One 30-scoop Ultra Bag");  
            $('.pay-today-lbl').html("$69.99 + $8.95 S&P"); 
        } else {    
            $('.two-weeks-bag-bullet').html("One 30-scoop Bag");    
            $('.pay-today-lbl').html("PAY $59.99 + $8.95 S&P"); 
        }   
        $('.free-14-bag, .MCOffer').hide(); 
    }   
}