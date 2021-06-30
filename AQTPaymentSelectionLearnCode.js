$('.onePaymentButton, .monthlyPaymentButton').on('click', function(){
  $('.activeButton').removeClass('activeButton');
  $(this).addClass('activeButton'); 
  showPaymentSection();
});
showPaymentSection();

$('[data-offer-section-button] a').on('click', function(e){
  if($('.activeButton').hasClass('monthlyPaymentButton') &&
    !$('[name="multi-payment-radio"]:checked').length){
    e.stopPropagation();
    e.preventDefault();
    return false;
  }
})

mojoApp._hooks.add('offer_selection_send_offers', function (e) {  
    
      var isOnePay = $('.onePaymentButton').hasClass('activeButton');
      var isMultiPay = !isOnePay && $('[name="multi-payment-radio"]:checked').val() == 'credit-card';
      var isAffirmPay = !isOnePay && $('[name="multi-payment-radio"]:checked').val() == 'affirm';
      
    
      for (var prop in e.offers) {  
        var offer = getPageOfferById(parseInt(prop));
        var isSelected = false;
        if(isOnePay && offer.offerGroup == "single"){
          isSelected = true;
        }
        else if(isMultiPay && offer.offerGroup == "multy3p"){
          isSelected = true;
        }
        else if(isAffirmPay && offer.offerGroup == "affirm"){
          isSelected = true;
        }
        if(isSelected){
          e.offers[prop] = 1; 
        }
        else{
          e.offers[prop] = 0; 
        }                 
      }   
      
    });
    
function showPaymentSection(){
  var selected = $('.activeButton');
  if($(selected).hasClass('monthlyPaymentButton')){
    $('.js-monthly-payment').show();  
  } 
  else{
    $('.js-monthly-payment').hide();  
  }
}
    
function getPageOfferById(offerId){
  for(var i = 0; i < ___pageOffers.length; ++i){
      if(___pageOffers[i].offerId == offerId){
        return ___pageOffers[i];
      }
  }
  return null;
}