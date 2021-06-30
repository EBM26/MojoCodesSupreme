

$(document).ready(function() {

    $(".starter-pack .widget-control__field").change(function() {

            if ($(this).find(":selected").val() == "73845") {
                $('.totalRow, .twoWeekTitle').show();
                $('#OffName').html("14-Scoop Bag");
                $('#OffVIPPrice').html("$29.95");
                $('#TotalPrice').html("$29.95");
                $('.bigPic img').attr("src","https://mojonow.blob.core.windows.net/cmr/t4468/src/3d2f4db25fbf45f796583193a381ff08_1.jpg");
                $('#ShipPrice').html("$0.00");
                $(".oneBagTitle").hide();
                $(".productDesc").html("In addition to your Grown American Superfood 2 Weeks to Super 14-scoop bag, your first shipment comes with the following free gifts:");
                $(".finePrint").html("After your initial shipment, you will receive one 30-scoop bag every 30 days.*");

         }

            else if ($(this).find(":selected").val() == "73846") {
                 $('.totalRow, .oneBagTitle').show();
                 $('#OffName').html("30-Scoop Bag");
                 $('#OffVIPPrice').html("$59.95");
                 $('#TotalPrice').html("$68.90");
                 $('.bigPic img').attr("src","https://mojonow.blob.core.windows.net/cmr/t4468/src/d994bec73dc4444e9477ef26f1fec1c9_1.jpg");
                 $('#ShipPrice').html("$8.95");
                 $(".twoWeekTitle").hide();
                 $(".productDesc").html("In addition to your Grown American Superfood 30-scoop bag, your first shipment comes with the following free gifts:");
                 $(".finePrint").html("You will receive one 30-scoop bag every 30 days.*");

            }
            
        }); 
});




 