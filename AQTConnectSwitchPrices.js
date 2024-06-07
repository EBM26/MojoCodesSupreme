 $(document).ready(function() {

	$(".onePayButt").click(function() {
		$(".payButt").removeClass("activeButt");
		$(this).addClass("activeButt");
		$(".paymentText").html("ORDER YOUR PURCHASE IN ONE FULL PAYMENT.");
		$(".selectBuy").removeClass("activeBuy");
		$(".onePayBuy").addClass("activeBuy");
	});

	$(".threePayButt").click(function() {
		$(".payButt").removeClass("activeButt");
		$(this).addClass("activeButt");
		$(".paymentText").html("3 EASY PAYMENTS OF $116.33 + S&P <img src='https://mojonow.blob.core.windows.net/cmr/t9383/src/215f23d274614b11afbceef1c69e4c50_1.jpg' class='ccImage'> <span class='smallText'>Your first payment will be due today, the second payment will be due in 30 days and the final payment will be due in 60 days. We will charge the credit card you use today for the remaining two payments.</span>");
		$(".selectBuy").removeClass("activeBuy");
		$(".threePayBuy").addClass("activeBuy");
	});

	$(".affirmPayButt").click(function() {
		$(".payButt").removeClass("activeButt");
		$(this).addClass("activeButt");
		$(".paymentText").html("PAYMENTS AS LOW AS $31/MONTH AT 0% APR. PREQUALIFY NOW. <img src='https://mojonow.blob.core.windows.net/cmr/t4406/src/cfaeba99893d4ff092fa374cef4884eb_1.png' class='affirmImage'> <span class='smallText'>Affirm not available in Iowa, West Virginia, and Canada.</span>");
		$(".selectBuy").removeClass("activeBuy");
		$(".affirmPayBuy").addClass("activeBuy");
	});

});