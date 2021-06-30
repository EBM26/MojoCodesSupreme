$(document).ready(function() {
	 $('#CheckoutForm').on('submit', function(e) {
	 	var isContinuous = ___currentCart.some(function (o) {return o.customFields?.RiskFree === "True";});
	 	var CC = $("#CreditCardNumber").val();

	 	if (CC[0] === "5" && isContinuous) {
	 		e.preventDefault();
	 		e.stopImmediatePropagation();
	 		$('#processing').hide();
            $('#CheckoutButton').show();
	 		alert("MasterCard cannot be used for risk free offers. Please use a different credit card");
	 		return false;
	 	}

	 });
});
