$(document).ready(function() {

    $(".starter-pack .widget-control__field").change(function() {

            if ($(this).find(":selected").val() == "78993") {
                $('#OffName').html("Original 30 Scoop Bag");
                $('#OffVIPPrice').html("$49.95");
                $('#TotalPrice').html("$49.95");
                $('.bigTitle').html("Grown American Superfood");
         }

            else if ($(this).find(":selected").val() == "78997") {
                 $('#OffName').html("Ultra 30 Scoop Bag");
                 $('#OffVIPPrice').html("$59.95");
                 $('#TotalPrice').html("$59.95");
                 $('.bigTitle').html("Grown American Superfood Ultra");
            }
            
        }); 
});
