<script>
 $(function() {
    var affirmStoreSites = [39814, 41002, 41265, 41309, 41521, 41522, 41523, 41524, 41526, 41527, 40802, 41681];
    if (affirmStoreSites.indexOf({D.CONTENT_VERSION_ID}) > -1){
		storeAffirmLogic();
	}
	else{
		standardAffirmLogic();
	}
    var is3pOffer = ___currentCart.some(function(o){return o.offerGroupName === 'multy3p';});
    var isAffirmOffer = ___currentCart.some(function(o){return o.offerGroupName === 'affirm';});
    if(is3pOffer || isAffirmOffer){
      $('#PayPalPaymentTypeLabel').hide(); 
      $('#PayPalPaymentTypeLabel').addClass('custom-hide-payment'); 
    }
});

var storeDeletedOffers = [];
function storeAffirmLogic(){
	if (___currentCart.some(function(offer) { return offer.customFields['is-main'] == 'true'; })) {
	   initStoreAffirm();
	   if (isAffirmProhibitedCustom()){
		hideAffirm();
		setStoreOffers(false);
	   }
    } else {
      hideAffirm();
	  setStoreOffers(false, true);
    }
	storePayPalUpdate();
	EditCartOffersMain.functions.removeOffer = function(btn){
		var offerId = $(btn).data('offer-id');
		if (EditCartOffersMain.prototype.isCartEditableOffer(offerId)) {
			EditCartOffersMain.prototype.setCartOfferQuantity(offerId, 0);
		}
		if (EditCartOffersMain.prototype.isCheckoutEditableOffer(offerId)) {
			EditCartOffersMain.prototype.setCheckoutOfferQuantity(offerId, 0);
		}
		storeDeletedOffers.push(offerId);
		
		isHasMain = false;
		$('.___cartOfferQuantity[value!=0], .___pageOfferQuantity[value!=0]').each(function(){
			var offerId = $(this).data('offer-id');
			var offer = ___commonCheckout.getPageOffer(offerId);
			offer = offer == null ? getCartOffer(offerId) : offer;
			if (offer != null && offer.customFields['is-main'] == 'true'){
				isHasMain = true;
			}
		});		
		if (isHasMain && !isAffirmProhibitedCustom()){
			$('#AffirmPaymentTypeLabel').show();			
			updatePrice();
		}
		else{
			hideAffirm();
			setStoreOffers(false);
		}
		storePayPalUpdate();
	}
}

function getCartOffer(offerId){
	for (var i = 0; i < ___currentCart.length; i++) {
            if (___currentCart[i].offerId == offerId) {
                return ___currentCart[i];
            }
        }
	return null;
}

function isAffirmProhibitedCustom(){
	isAffirmProhibited = false;
	$('.___cartOfferQuantity[value!=0], .___pageOfferQuantity[value!=0]').each(function(){
		var offerId = $(this).data('offer-id');
		var offer = ___commonCheckout.getPageOffer(offerId);
		offer = offer == null ? getCartOffer(offerId) : offer;
		var blockedPayments = offer != null && typeof offer.customFields['prohibited-payments'] !== 'undefined' ? offer.customFields['prohibited-payments'] : '';
		if (blockedPayments.indexOf('Affirm') >-1){
			isAffirmProhibited = true;
		}
	});
	return isAffirmProhibited;
}

function storePayPalUpdate(){
	isHidePayPal = false;
	$('.___cartOfferQuantity[value!=0], .___pageOfferQuantity[value!=0]').each(function(){
		var offerId = $(this).data('offer-id');
		var offer = ___commonCheckout.getPageOffer(offerId);
		offer = offer == null ? getCartOffer(offerId) : offer;
		var blockedPayments = offer != null && typeof offer.customFields['prohibited-payments'] !== 'undefined' ? offer.customFields['prohibited-payments'] : '';
		if (blockedPayments.indexOf('PayPal') >-1){
			isHidePayPal = true;
		}
	});

	if (isHidePayPal){
		$('#PayPalPaymentTypeLabel').hide();
		if ($('[name=PaymentMethod]').val() == 'paypal'){
			$('#CreditCardPaymentTypeLabel').click();
		}
	}
	else if ($('#PayPalPaymentTypeLabel').is(':hidden')){
		$('#PayPalPaymentTypeLabel').show();
	}
}

function standardAffirmLogic(){
	if (___currentCart.some(function(offer) { return offer.offerGroup.indexOf('affirm') > -1; })) {
       showAffirm();
    } else {
      hideAffirm();
    }
}

function showAffirm(){
	// Affirm is shown
      $('#CreditCardPaymentTypeLabel').hide();
      $('#AffirmPaymentTypeLabel').show().click();
      var timerAffirm = setInterval(function(){
        var button =  $('#affirm-btn');
        if(button.length){
          button.show();                                                                                                                                                                                                          
          clearInterval(timerAffirm);     
        }            
      },100);
}

function hideAffirm(){
	// Affirm is hidden
      $('#CreditCardPaymentTypeLabel').show().click();
      $('#AffirmPaymentTypeLabel').hide();
}

function initStoreAffirm(){
	$('.___pageOfferQuantity').val(0);
	$('[name="PaymentMethod"]').on('change', function(){
		if($(this).val() == 'affirm'){
			setStoreOffers(true);
		}
		else{
			setStoreOffers(false);
		}
	});
	setStoreOffers(false, true);
}

function setStoreOffers(isAffirm, isInit){
    isInit = isInit || false;
    var offersQty = {};
    $('.___cartOfferQuantity[value!=0], .___pageOfferQuantity[value!=0]').each(function(){
        var offerId = $(this).data('offer-id');
        offersQty[offerId] = $(this).val();
    });
	$('.___cartOfferQuantity').val(0);
	$('.___pageOfferQuantity').val(0);
	for (var i = 0; i < ___currentCart.length; ++i){
		var offer = ___currentCart[i];
		var newOffer = isAffirm ? getAffirmOffer(offer) : getRegularOffer(offer);
		var oldOffer = isAffirm ? getRegularOffer(offer) : getAffirmOffer(offer);		
		if (newOffer != null && oldOffer != null){	
            var qty = offersQty[oldOffer.offerId];
            if (typeof qty == 'undefined' || qty == 0){
                qty = offersQty[newOffer.offerId];
                if (typeof qty == 'undefined' && isInit){
                    qty = offer.quantity;
                }
            }		
			if(qty > 0){
				if($('.___pageOfferQuantity[data-offer-id="'+newOffer.offerId+'"]').length){
					$('.___pageOfferQuantity[data-offer-id="'+newOffer.offerId+'"]').val(qty);
				}
				else{
					$('.___cartOfferQuantity[data-offer-id="'+newOffer.offerId+'"]').val(qty);
				}
			}			
		}
		else{
            var qty = offersQty[offer.offerId];
            if (typeof qty == 'undefined'){
                qty = storeDeletedOffers.indexOf(offer.offerId) > -1 ? 0: offer.quantity;
            }
			if($('.___pageOfferQuantity[data-offer-id="'+offer.offerId+'"]').length){
				$('.___pageOfferQuantity[data-offer-id="'+offer.offerId+'"]').val(qty);
			}
			else{
				$('.___cartOfferQuantity[data-offer-id="'+offer.offerId+'"]').val(qty);
			}
		}
	}
    updatePrice();
}

function getAffirmOffer(offer){
	for (var i = 0; i < ___pageOffers.length; ++i){
		if (typeof ___pageOffers[i].customFields['custom-group'] !== 'undefined' && 
		___pageOffers[i].customFields['custom-group'] == offer.customFields['custom-group'] &&
		___pageOffers[i].offerGroup == 'affirm'){
			return ___pageOffers[i];
		}
	}
	return null;
}

function getRegularOffer(offer){
	for (var i = 0; i < ___pageOffers.length; ++i){
		if (typeof ___pageOffers[i].customFields['custom-group'] !== 'undefined' && 
		___pageOffers[i].customFields['custom-group'] == offer.customFields['custom-group'] &&
		___pageOffers[i].offerGroup != 'affirm'){
			return ___pageOffers[i];
		}
	}
	return null;
    }
</script>

<script>
   var customizationExclude = [];
  if ([38248].indexOf({D.CONTENT_VERSION_ID}) > -1 || {D.CONTENT_VERSION_ID} >= 39027 && customizationExclude.indexOf({D.CONTENT_VERSION_ID}) == -1) {
    $(function() {
      var canShown = false;
      var isFirst = true;

      $('.checkout-form-total-in').parent().hide();
      $(document).on(CheckoutMain.eventslist.PRICE_CALCULATION_TABLE_RENDERED, function() { 
        if (canShown) $('.checkout-form-total-in').parent().show();
        else $('.checkout-form-total-in').parent().hide();
      });

      $(document).on(CheckoutMain.eventslist.CART_INIT_COMPLETE, onCartInit);

      function onCartInit() {
        ___pageOffers.forEach(function(o) {
          if (o.customFields['custom-script-id'])
            ___commonCheckout.setOfferQuantity(o.offerId, 0);
          });

        ___currentCart.forEach(function(o) {
          setOfferQuantity(o, o.quantity);
        });
        updatePriceBase();

        if (!isFirst) {
          $(document).off(CheckoutMain.eventslist.CART_INIT_COMPLETE, onCartInit);
          canShown = true;
        } isFirst = false;
      }

      EditCartOffersMain.functions.changeOfferQuantity = function(btn) {
        var offerId = $(btn).data('offer-id');
        var delta = $(btn).data('delta');

        var offer = getPageOfferById(offerId);
        if (offer && offer.customFields['custom-script-id']) {
          var currentQty = EditCartOffersMain.prototype.getCheckoutOfferValue(offerId);
          setOfferQuantity(offer, Math.min(Math.max(1, currentQty + delta), offer.maxQuantity));
          updatePrice();
        } else {
          if (EditCartOffersMain.prototype.isCartEditableOffer(offerId)) {
            EditCartOffersMain.functions.changeCartOfferQuantity(offerId, delta);
          }
          else if (EditCartOffersMain.prototype.isCheckoutEditableOffer(offerId)) {
            EditCartOffersMain.functions.changeCheckoutOfferQuantity(offerId, delta);
          }
        }
      }
    });

    function setOfferQuantity(offer, qty) {
      if (offer.customFields['custom-script-id']){
        var off_sp = ___pageOffers.find(function(o) { return o.customFields['custom-script-id'] === offer.customFields['custom-script-id'] && o.customFields['is-free-shipping'] === 'false' });
        var off_fs = ___pageOffers.find(function(o) { return o.customFields['custom-script-id'] === offer.customFields['custom-script-id'] && o.customFields['is-free-shipping'] === 'true' });

        if (qty == 1) {
          if (off_sp) { 
            ___commonCheckout.setOfferQuantity(off_sp.offerId, 1); 
            $('.___cartOfferQuantity[data-offer-id="'+off_sp.offerId+'"]').val(1);
          }
          if (off_fs) { 
            ___commonCheckout.setOfferQuantity(off_fs.offerId, 0);
            $('.___cartOfferQuantity[data-offer-id="'+off_fs.offerId+'"]').val(0);
          }
        } else {
          if (off_sp) {
              ___commonCheckout.setOfferQuantity(off_sp.offerId, 0);	  
                $('.___cartOfferQuantity[data-offer-id="'+off_sp.offerId+'"]').val(0);
          }
          if (off_fs) {
              ___commonCheckout.setOfferQuantity(off_fs.offerId, qty);
            $('.___cartOfferQuantity[data-offer-id="'+off_fs.offerId+'"]').val(qty);	  
          }
        }
      } else {
        ___commonCheckout.setOfferQuantity(offer.offerId, qty);
      }
    }

    function getPageOfferById(offerId) {
      return ___pageOffers.find(function(o) { return o.offerId === offerId; });
    }
    }
</script>
