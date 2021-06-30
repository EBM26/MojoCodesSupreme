$(document).ready(function() {

    $(".dSelector .widget-control__field").change(function() {

            if ($(this).find(":selected").val() == "88299") {
                $(".offerText").html("10 Packs (5 Masks/Pack)");
                $(".priceText").html("$20.00");
                $(".shippingText").html("$12.99");
                $(".totalText").html("$32.99");
            }

            else if ($(this).find(":selected").val() == "88300") {
                $(".offerText").html("20 Packs (5 Masks/Pack)");
                $(".priceText").html("$40.00");
                $(".shippingText").html("$13.99");
                $(".totalText").html("$53.99");
            }

            else if ($(this).find(":selected").val() == "88301") {
                $(".offerText").html("100 Packs (5 Masks/Pack)");
                $(".priceText").html("$200.00");
                $(".shippingText").html("$23.99");
                $(".totalText").html("$223.99");
            }

            else if ($(this).find(":selected").val() == "88302") {
                $(".offerText").html("300 Packs (5 Masks/Pack)");
                $(".priceText").html("$600.00");
                $(".shippingText").html("$28.99");
                $(".totalText").html("$628.99");
            }

            else if ($(this).find(":selected").val() == "88303") {
                $(".offerText").html("500 Packs (5 Masks/Pack)");
                $(".priceText").html("$1000.00");
                $(".shippingText").html("$35.99");
                $(".totalText").html("$1035.99");
            }

            else if ($(this).find(":selected").val() == "88304") {
                $(".offerText").html("1000 Packs (5 Masks/Pack)");
                $(".priceText").html("$2000.00");
                $(".shippingText").html("$42.99");
                $(".totalText").html("$1042.99");
            }

        }); 

});