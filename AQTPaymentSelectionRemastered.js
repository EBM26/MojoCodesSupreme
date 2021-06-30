$('.onePaymentButton, .monthlyPaymentButton').on('click', function(){
  $('.activeButton').removeClass('activeButton');
  $(this).addClass('activeButton'); 
  showPaymentSection();
});
showPaymentSection();

$('[data-offer-section-button] a').on('click', function(e){
  if(isValidSelection()){
    e.stopPropagation();
    e.preventDefault();
    return false;
  }
})

mojoApp._hooks.add('offer_selection_send_offers', function (e) {  
          
      for (var prop in e.offers) {  
        var offer = getPageOfferById(prop);
        var isSelected = isValidSelection(offer.offerGroup);
        e.offers[prop] = isSelected;                
      }   
      
    });

function isValidSelection(offerGroup){

      var isOnePay = $('.onePaymentButton').hasClass('activeButton');
      var isMultiPay = !isOnePay && $('[name="multi-payment-radio"]:checked').val() === 'credit-card';
      var isAffirmPay = !isOnePay && $('[name="multi-payment-radio"]:checked').val() === 'affirm';
      var isSelected = 0;

      if(isOnePay && !offerGroup || offerGroup === "single"){
          isSelected = 1;
      }
        
      else if(isMultiPay && !offerGroup || offerGroup === "multy3p"){
          isSelected = 1;
      }
        
      else if(isAffirmPay && !offerGroup || offerGroup === "affirm"){
          isSelected = 1;
      }

      return isSelected;

}
    
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