$(function () {

  $('.offerCheck').on('change', function (e) {
    var it = $(e.currentTarget);
    $('.offerCheck').prop('checked', false);
    it.prop('checked', true);

    var wr = it.closest('.radio-wr');
    var extremeBox = $('.extremeBox');
    var extraBullet = $('.reverseOsmosis');
    if (wr.hasClass('offerCheckCombo')) {
      extremeBox.show();
      extraBullet.show();
    } else {
      extremeBox.hide();
      extraBullet.hide();
    }

  });

  $('.addToCartButton').on('click', function(e) {
    var it = $(e.currentTarget);

    mojoApp.cartButtons.forEach(function (b) {
      var btn = $(b._button).closest('div');
      btn.show();
    });
    
    it.addClass('clickedButton');
  });
  
  $('.offerCheck:first').trigger('change');

  mojoApp._hooks.add('offer_selection_send_offers', setOfferQuantity);

  mojoApp._hooks.add('offer_selection_add_to_cart_click', setOfferQuantity);

  mojoApp._hooks.add('offer_selection_add_to_cart_offers_added', function (e) {
    console.log(e);
  });

  mojoApp._hooks.add('offer_selection_add_to_cart_error', function (e) {
    console.log(e);
  });

  mojoApp._hooks.add('mojo_cart_updated', function (e) {
    var cartData = e.cart._cartState.CartOffers.filter(function (o) { return !o.IsNotShowToCustomer; });
    var quantity = cartData.reduce(function (a, b) { return a + b.Quantity; }, 0);

    mojoApp.cartButtons.forEach(function (b) {
      var button = $(b._button);

      if (b._showItemsCount) {
        $('.cart-items', button).text('(' + quantity + ')');
      }
    });

  });

});

function setOfferQuantity(e) {
  var qty = Number($(mojoApp.offerSelectionPage._offerSectionSelector + ' select:visible').val() || '1');
  // clear qty
  for (var offerId in e.offers) {
    var offer = getPageOfferById(Number(offerId));
    
    if (offer && offer.offerSection != null ) {
      var customGroup = offer.offerSection;
      var isSelected = customGroup !== '' && $('input[type=checkbox][data-group="' + customGroup + '"]').is(':checked') ||
        customGroup === '' && ($('input[type=checkbox]:not([data-group])').is(':checked') || $('input[type=checkbox]:checked').length === 0);
        e.offers[offerId] = isSelected ? qty : 0;
    }
  }  
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