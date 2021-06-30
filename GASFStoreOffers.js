   mojoApp._hooks.add('offer_selection_add_to_cart_click', function(e){
      let btnClassList = $(this).attr("class").split(" ");
      let btnClass = btnClassList.find(function(c){
        return c.startsWith("ddlform");
      });
      setOfferQuantity(e, btnClass);
   });

  mojoApp._hooks.add('offer_selection_add_to_cart_offers_added', function (e) {
    console.log(e);
  });

  mojoApp._hooks.add('offer_selection_add_to_cart_error', function (e) {
    console.log(e);
  });

  mojoApp._hooks.add('mojo_cart_updated', function (e) {
    console.log(e);
    var cartData = e.cart._cartState.CartOffers.filter(function (o) { return !o.IsNotShowToCustomer; });
    var quantity = cartData.reduce(function (a, b) { return a + b.Quantity; }, 0);

    mojoApp.cartButtons.forEach(function (b) {
      var button = $(b._button);

      if (b._showItemsCount) {
        $('.cart-items', button).text('(' + quantity + ')');
      }

    });

  });

function setOfferQuantity(e, btnClass) {
  console.log(e);
  // var qty = Number($(mojoApp.offerSelectionPage._offerSectionSelector + ' select:visible').val() || '1');

  // for (var offerId in e.offers) {
  //   var offer = getPageOfferById(Number(offerId));
    
  //   if (offer && offer.offerSection != null ) {
  //     var customGroup = offer.offerSection;
  //     var isSelected = customGroup !== '' && $('input[type=checkbox][data-group="' + customGroup + '"]').is(':checked') ||
  //       customGroup === '' && ($('input[type=checkbox]:not([data-group])').is(':checked') || $('input[type=checkbox]:checked').length === 0);
  //       e.offers[offerId] = isSelected ? qty : 0;
  //   }
  // }  
}

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


