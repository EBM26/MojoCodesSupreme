$(document).ready(checkBarSKU);
$(document).ready(function() {
   OfferGroups.forEach(function(product) {
     changeOfferQuantity(0, product);
  });
 
});


$("#ShippingStateId").change(function(){

    checkBarSKU($(this).val()); 

});

const OfferGroups = ["STRAWBARS", "APPLBARS"];

function checkBarSKU(state) {
  OfferGroups.forEach(function(product) {
   var barInCart = ___currentCart.find(item => item.offerGroup === product+"NOCA");
   if (barInCart) {
    if (state == 5) {  
    removeFromCart(barInCart);
    changeOfferQuantity(barInCart.quantity, product);
   }
  else {
    addToCart(barInCart, product);
    changeOfferQuantity(0, product);
  }
   }

  });
};

function changeOfferQuantity(num, offerBase) {
  var caliBarInCart = ___pageOffers.find(item => item.offerGroup === offerBase+"CA");
  if (typeof caliBarInCart !== "undefined") {
    ___commonCheckout.setOfferQuantity(caliBarInCart.offerId, num);
    updatePrice();
  }

};

function removeFromCart(item) {
  var curCartOffer = $('.___cartOfferQuantity[data-offer-id="'+item.offerId+'"]');
  curCartOffer.val(0);
  updatePrice();
}

function addToCart(item, offerBase) {
  var curCartOffer = $('.___cartOfferQuantity[data-offer-id="'+item.offerId+'"]');
  if (curCartOffer.val() == 0) {
    var caliBarInCart = ___pageOffers.find(item => item.offerGroup === offerBase+"CA");
    var pageOffer = $('.___pageOfferQuantity[data-offer-id="'+caliBarInCart.offerId+'"]');
    curCartOffer.val(pageOffer.val());
  }

}


