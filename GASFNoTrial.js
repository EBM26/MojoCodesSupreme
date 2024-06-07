$(function(){
    var sections = mojoApp.offerSelectionPage._sections.map(function(s){
        return s.offers.map(function(o){ return o.offerId; });
    });
    
    var mainSectionNumber = 1;
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
    var buttonTexts = [["14-Day","14-Scoop Bag"],["Family Pack"],["One 30-Scoop Bag"]];
    var actualMainOffers = mainOffers.map(function(it){return getPageOfferById(it);});
    var offerIds = [];
    buttonTexts.forEach(function(textArray){
       var offer = actualMainOffers.find(function(o){ return textArray.some(function(txt){ return o.trackingName.indexOf(txt)===0;}); });
       offerIds.push(offer ? offer.offerId : 0);
    });
    $('.btnChoice').each(function(){
        $(this).data('offer-id', offerIds[ind++ % offerIds.length]);
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
    });
    $('.btnChoice:first').trigger('click');
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
        var newOffer = getDeluxeOffer(selectedOffer) || getRegularOffer(selectedOffer);
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
    var shippingText = `$${e.cart._cartState.OrderShippingPrice.toFixed(2)}`;
    if (e.cart._cartState.OrderShippingPrice == 0){
        shippingText = 'Free';
    }
    $('#ShipPrice').text(shippingText);
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
    if (sectionNumber == barsSectionNumber ){
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
    if (offer.trackingName == "14-Day GASF" || offer.trackingName.indexOf("14-Day") === 0 || offer.trackingName.indexOf("14-Scoop Bag") === 0) {    
        $('.notOnSuper').hide();    
        $('.product-title').html("TRIAL PACK");
        $('.superImage, .free-14-bagSuper, .twoFreeBars').show(); 
        $('.free-ShakerCup').hide();
        $('.pay-today-lbl:eq(1)').html("<b>$29.95 + Free Shipping</b>");    
        $(".prodDesc").html("Your Grown American Superfood 2 Weeks to Super program initial shipment will include:");
        $('.bigPic img').attr("src","conjure_resource(ce3c1d2b304b402fb41877e6db388dfd)");
        if (isDeluxe) { 
            $('.two-weeks-bag-bullet').html("2 Weeks To Super 14 Scoop Ultra Bag"); 
        } else {    
            $('.two-weeks-bag-bullet').html("2 Weeks To Super 14 Scoop Bag");   
        }       
    }   
    else if (offer.trackingName == "Family Pack" || offer.trackingName.indexOf("Family Pack") === 0) {  
        $('.product-title, .notOnSuper').show();    
        $('.superImage, .free-14-bagSuper, .twoFreeBars').hide();
        $('.free-ShakerCup').show();
        $('.product-title').html("FAMILY PACK");    
        $('.pay-today-lbl:eq(1)').html("<b>Pay Today Only $8.95 S&P</b>");
        $('.bigPic img').attr("src","conjure_resource(f59c0b6ec6cb4e15bc7d2a2780c26a17)");          
        $('.first-shipment').html("Your First Shipment Includes:"); 
        if (isDeluxe) { 
            $('.two-weeks-bag-bullet').html("Four 30-scoop Ultra Bags");    
            $(".prodDesc").html("Receive four 30-scoop bags every 60 days for ONLY $179.80 + $9.95 S&P Your First Shipment Includes:"); 
        } else {    
            $('.two-weeks-bag-bullet').html("Four 30-scoop Bags");  
            $(".prodDesc").html("Receive four 30-scoop bags every 60 days for ONLY $159.80 + $9.95 S&P. Your First Shipment Includes:");    
        }   
        $('.free-14-bag').show();   
        $('.free-14-bag').html("Free 14-scoop Bag");    
    }   
    else if (offer.trackingName == "One 30-Scoop Bag") {
        $('.product-title, .notOnSuper').show();    
        $('.superImage, .free-14-bagSuper, .twoFreeBars').hide();
        $('.free-ShakerCup').show();
        $('.product-title').show(); 
        $('.superImage').hide();    
        $('.product-title').html("ONE 30-SCOOP BAG");   
        $('.product-sub-heading').html("One Time Purchase*");   
        $(".prodDesc").html("Your Shipment Includes:"); 
        $('.first-shipment').html("Your Shipment Includes:");
        $('.bigPic img').attr("src","conjure_resource(5e87dd9d52804378994642bbde47cba3)");  
        if (isDeluxe) { 
            $('.two-weeks-bag-bullet').html("One 30-scoop Ultra Bag");
                          $('.pay-today-lbl:eq(1)').html("<b>$69.95 + $4.95 S&P</b>");  
                
        } else {    
            $('.two-weeks-bag-bullet').html("One 30-scoop Bag");
                          $('.pay-today-lbl:eq(1)').html("<b>$59.95 + $4.95 S&P</b>");      
            
        }   
        $('.free-14-bag, .MCOffer').hide(); 
    }   
}
