
 
 $(function () {
 var offerIds =[];
 var sections = mojoApp.offerSelectionPage._sections.map(function(s){
        return s.offers.map(function(o){ return o.offerId; });
    });
    reloadOffers();
   // $("input[name='typeOffer']").trigger('click');
  $("input[name='typeOffer']").change(function () {
       reloadOffers();
    });
    var currentValue = $(".numBox").html();
    var currentNumber = new Number(currentValue);

    $(".minusBox").click(function () {

        if (currentNumber == 1) {
            return;
        }

        else {
            $(".numBox").html(currentNumber -= 1);
            if (currentNumber == 1) {
                $("#addBag").html("Add A Bag For FREE Shipping").removeClass("greenText");
            }
        }
        reloadOffers();

    });

    $(".plusBox").click(function () {
        if (currentNumber == 3) {
            return;
        }

        else {
            $(".numBox").html(currentNumber += 1);
            $("#addBag").html("You Get Free Shipping!").addClass("greenText");
        }
        reloadOffers();
    });
 
 mojoApp._hooks.add('offer_selection_send_offers', function (e) {
            for (var offerId in e.offers) {
                e.offers[offerId] = offerIds.filter(function (id) { return id === Number(offerId) }).length * currentNumber;
            }
        });
        
        function reloadOffers() {
          offerIds =[];
        var currentValue = $(".numBox").html();
        var currentNumber = new Number(currentValue);
        if ($("input[name='typeOffer']:checked").val() == "one-time") {
            if (currentNumber > 1) { //free shipping
                var offer = mojoApp.offerSelectionPage._sections[0].offers.filter(x => x.shippingPrice == 0 && x.offerType == "Ordinary");
                offerIds.push(offer[0].offerId);
                var price = (offer[0].price*currentNumber).toFixed(2);
                $(".total").text("$" + price);
            } else { //with shipping
                var offer = mojoApp.offerSelectionPage._sections[0].offers.filter(x => x.shippingPrice != 0 && x.offerType == "Ordinary");
                offerIds.push(offer[0].offerId);
                $(".total").text("$59.95");
            }
            
        } else {
            if (currentNumber > 1) { //free shipping
                var offer = mojoApp.offerSelectionPage._sections[1].offers.filter(x => x.shippingPrice == 0 && x.offerType == "Ordinary");
                var attachedOffer = mojoApp.offerSelectionPage._sections[1].offers.filter(x => x.shippingPrice == 0 && x.offerType == "Attached");
                offerIds.push(offer[0].offerId);
                offerIds.push(attachedOffer[0].offerId);
                var price = (offer[0].price*currentNumber).toFixed(2);
                $(".total").text("$" + price);
                $(".saving").text("You're SAVING $" + currentNumber*10 +"!");
            } else { //with shipping
                var offer = mojoApp.offerSelectionPage._sections[1].offers.filter(x => x.shippingPrice != 0 && x.offerType == "Ordinary");
                var attachedOffer = mojoApp.offerSelectionPage._sections[1].offers.filter(x => x.shippingPrice != 0 && x.offerType == "Attached");
                offerIds.push(offer[0].offerId);
                offerIds.push(attachedOffer[0].offerId);
                $(".total").text("$49.95");
                $(".saving").text("You're SAVING $10!");
            }
        }
    }
    });
    
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>160){
            $('.topDivS').fadeIn(300)
        }else{
            $('.topDivS').fadeOut(300)
        }
    });
});

