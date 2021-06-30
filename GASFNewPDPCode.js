$(document).ready(function() {

    $(".starter-pack .widget-control__field").change(function() {

            if ($(this).find(":selected").val() == "76941") {
            
                $('.product-title').html("RISK-FREE TRIAL");
                $('.product-sub-heading').html("Preferred Enrollment* (Save $100)");
                $('.pay-today').html("Pay only $8.95 S&amp;P Today");
                $(".productDesc").html("Receive two 30-scoop† bags every 60 days for ONLY $99.90 + $9.95 S&amp;P");
                $('.first-shipment').html("Your First Shipment Includes:");
                $('.two-weeks-bag-bullet').html("Two 30-scoop Bags");
                $('.free-14-bag').show();
                $('.free-14-bag').html("Free 14-scoop Bag");
                $('#OffName').html("Risk-Free Trial");
                $('#OffVIPPrice').html("$99.90");
                $('#ShipPrice').html("$8.95");
                $('#TotalPrice').html("$108.85");
                $('.todayOnly').show();
                $('.bigPic img').attr("src","conjure_resource(d7afd8cf869d4c20a42fc67e912695c0)");
                
         }
         
            else if ($(this).find(":selected").val() == "76942") {
            
                $('.product-title').html("FAMILY PACK");
                $('.product-sub-heading').html("Preferred Enrollment* (Save $250)");
                $('.pay-today').html("Pay only $8.95 S&amp;P Today");
                $(".productDesc").html("Receive four 30-scoop† bags every 60 days for ONLY $159.80 + $9.95 S&amp;P");
                $('.first-shipment').html("Your First Shipment Includes:");
                $('.two-weeks-bag-bullet').html("Four 30-scoop Bags");
                $('.free-14-bag').show();
                $('.free-14-bag').html("Free 14-scoop Bag");
                $('.todayOnly').show();
                $('#OffName').html("Family Pack");
                $('#OffVIPPrice').html("$159.80");
                $('#ShipPrice').html("$8.95");
                $('#TotalPrice').html("$168.75");
                $('.bigPic img').attr("src","conjure_resource(01a82622dacc4665b7b43409f88b92b2)");
                
         }

            else if ($(this).find(":selected").val() == "68539") {
            
                $('.product-title').html("ONE 30-SCOOP BAG");
                $('.product-sub-heading').html("One Time Purchase*");
                $('.pay-today').html("$59.99 + $8.95 S&amp;P");
                $(".productDesc").html("");
                $('.first-shipment').html("Your Shipment Includes:");
                $('.two-weeks-bag-bullet').html("One 30-scoop† Bag");
                $('.free-14-bag').hide();
                $('.todayOnly').hide();
                $('#OffName').html("One 30-Scoop Bag");
                $('#OffVIPPrice').html("$59.99");
                $('#ShipPrice').html("$8.95");
                $('#TotalPrice').html("$68.94");
                $('.bigPic img').attr("src","conjure_resource(0d3d74303663496a8f2916a79db43a39)");

         }
            
        }); 
});






