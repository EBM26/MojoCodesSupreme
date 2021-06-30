$(function(){
    var sections = mojoApp.offerSelectionPage._sections.map(function(s){
        return s.offers.map(function(o){ return o.offerId; });
    });
    var i = 0;
    
    $('.btnChoice').each(function(){
        $(this).data('offer-id', sections[1][i++ % sections[1].length]);
    }).click(function(){
        $('select', $(mojoApp.offerSelectionPage._offerSelector, $(mojoApp.offerSelectionPage._sections[1].tag))).val($(this).data('offer-id'));
        $('.btnChoice').removeClass('btnActive');
        $(this).addClass('btnActive');
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
    var MainOffer = e.cart._cartState.CartOffers.find(function(o) { return sections[1].indexOf(o.OfferId) > -1; });
    var BarsOffers = e.cart._cartState.CartOffers.filter(function(o) { return sections[0].indexOf(o.OfferId) > -1; });
    var BarsOffersPrice = BarsOffers.reduce(function(sum, o){ return sum + o.Price; }, 0);

    if (MainOffer) {
      $('.main-offer-row').show();
      $('.row-free-gifts').show();
      $('#OffName').text(MainOffer.Title);
      $('#OffVIPPrice').text(`$${MainOffer.Price.toFixed(2)}`);
    } else {
      $('.main-offer-row').hide();
      $('.row-free-gifts').hide();
    }
    if (BarsOffers.length > 0) {
      $('.row-superfood-bars').show();
      $('#bars').text(`Superfood Bars (${BarsOffers.reduce(function(sum, o){ return sum + o.Quantity; }, 0)})`);
      $('#bars-price').text(`$${BarsOffersPrice.toFixed(2)}`);
    } else {
      $('.row-superfood-bars').hide();
    }
    $('#ShipPrice').text(`$${e.cart._cartState.OrderShippingPrice.toFixed(2)}`);
    $('#TotalPrice').text(`$${((MainOffer ? MainOffer.Price : 0) + BarsOffersPrice).toFixed(2)}`);
    $('#TotalPay').text(`$${e.cart._cartState.OrderShippingPrice.toFixed(2)}`);
  });

  function setOfferQuantity(e) {
    var offerId = Number(Object.keys(e.offers).find(function(o){ return e.offers[o] > 0; }));
    var offerQty = e.offers[offerId];
    var section = sections.find(function(s){ return s.indexOf(offerId) > -1; });
    
    var offers = section.map(function(o){ return { offer: o, quantity: o === offerId ? offerQty : 0 }; });

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


