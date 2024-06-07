<script>
$('.onePaymentButton, .monthlyPaymentButton').on('click', function(){
    $('.activeButton').removeClass('activeButton');
    $(this).addClass('activeButton'); 
    var isOnePay = $('.onePaymentButton').hasClass('activeButton');
    var isMultiPay = $('.monthlyPaymentButton').hasClass('activeButton');
    for (var offer of ___pageOffers) {
        if (offer.offerGroup == 'multy3p') {
            if (!isMultiPay) continue;
            $(".itemDes").html("3-Payments of $56.60 for Rotorazer Platinum");
            $(".itemPrice").html("$56.60");
            $(".subTot").html("$56.60");
            $(".estTotal").html("$69.90");
            $(".futPay").html("$56.60");
        } else if (offer.offerGroup == 'single') {
            if (!isOnePay) continue;
            $(".itemDes").html("1 Payment of $169.80 for Rotorazer Platinum");
            $(".itemPrice").html("$169.80");
            $(".subTot").html("$169.80");
            $(".estTotal").html("$169.80");
            $(".futPay").html("$0");
        }
    }
});


mojoApp._hooks.add('offer_selection_send_offers', function (e) {    
        
            var isOnePay = $('.onePaymentButton').hasClass('activeButton');
            var isMultiPay = $('.monthlyPaymentButton').hasClass('activeButton');
            
        
            for (var prop in e.offers) {    
                var offer = getPageOfferById(parseInt(prop));
                var isSelected = false;
                if(isMultiPay) {
                    isSelected = offer.offerGroup == "multy3p";
                }
                else if(isOnePay){
                    isSelected = offer.offerGroup == "single";
                }
                if(isSelected){
                    e.offers[prop] = 1; 
                }
                else{
                    e.offers[prop] = 0; 
                }                                 
            }       
            
        });
        
function getPageOfferById(offerId){
    for(var i = 0; i < ___pageOffers.length; ++i){
            if(___pageOffers[i].offerId == offerId){
                return ___pageOffers[i];
            }
    }
    return null;
}
</script>