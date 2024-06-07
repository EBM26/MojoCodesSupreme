       $(document).ready(function() {
        $(".widget-radio__field").click(function() {
            if ($(this).attr('value') == "one-time") {
              $(".subBox").addClass("divOff").removeClass("divOn");
              $(".oneBox").addClass("divOn").removeClass("divOff");
              $(".saving").hide();
            }

            if ($(this).attr('value') == "subscribe") {
              $(".oneBox").addClass("divOff").removeClass("divOn");
              $(".subBox").addClass("divOn").removeClass("divOff");
              $(".saving").show();
            }
        })

      });


$(function () {
 
   $('[data-months]').on('click', function(){
      var currentMonths = $(this).data('months');
      $('[class*="months-"]').addClass('hidden');
      $('.months-' + currentMonths).removeClass('hidden');
      $('.qty-nav-link.active').removeClass('active');
      $(this).addClass('active');
      $('[name=typeOffer]:visible:first').prop('checked', true);
   });
   
   $('[name=typeOffer]:visible:first').prop('checked', true);
 
   mojoApp._hooks.add('offer_selection_send_offers', function (e) {
      var selectedMonths = $('.qty-nav-link.active').data('months');
      var type = $('[name=typeOffer]:checked').val();
      var offerGroup = type + '|' + selectedMonths;
      var offers = ___pageOffers.filter(function(o){return o.offerGroup.toLowerCase() == offerGroup});
      
      for (var offerId in e.offers) { 
         e.offers[offerId] = 0;
      }
      for (var i = 0; i < offers.length; ++i){
         var offer = offers[i];
         e.offers[offer.offerId] = 1;
         var attached = getAttachedOffers(offer.offerId);
         for (var j = 0; j < attached.length; ++j){
            var att = attached[j];
            e.offers[att.offerId] = 1;
         }
      }
   });
});
 
function getAttachedOffers(offerId){
    return ___pageOffers.filter(function(o){return o.offerType == "Attached" && o.parentOfferId == offerId});
}
 
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>1000){
            $('.topDivS').fadeIn(300)
        }else{
            $('.topDivS').fadeOut(300)
        }
    });
});

