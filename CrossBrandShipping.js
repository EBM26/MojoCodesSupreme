$(document).ready(function() {
	var thisVal = thisVal;
  $('#ShippingCountryId').on('change', function() {
     if ( thisVal == 2 ){
     	$(".js-cart-info-shipping").prev().find('span:eq(0)').html("Standard Delivery Time: 3 Weeks");
     	console.log("Canada Selected");
     }

     else {
     	$(".js-cart-info-shipping").prev().find('span:eq(0)').html("Standard Delivery Time: 1-2 Weeks");
     }
  });

    $('#ShippingStateId').on('change', function() {
     if ( thisVal == 11 || 2162 || 1 ){
     	$(".js-cart-info-shipping").prev().find('span:eq(0)').html("Standard Delivery Time: 3 Weeks");
     	console.log("Canada Selected");
     }

     else {
     	$(".js-cart-info-shipping").prev().find('span:eq(0)').html("Standard Delivery Time: 1-2 Weeks");
     }
  });

});