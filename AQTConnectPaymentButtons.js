 $(document).ready(function() {

	$(".onePayButt2").click(function() {
		$(".payButt2").removeClass("activeButt2");
		$(this).addClass("activeButt2");
		$(".paymentText2").html("ORDER YOUR PURCHASE IN ONE FULL PAYMENT.");
		$(".selectBuy2").removeClass("activeBuy2");
		$(".onePayBuy2").addClass("activeBuy2");
	});

	$(".threePayButt2").click(function() {
		$(".payButt2").removeClass("activeButt2");
		$(this).addClass("activeButt2");
		$(".paymentText2").html("3 EASY PAYMENTS OF $106.33 + S&P <img src='https://mojonow.blob.core.windows.net/cmr/t9383/src/215f23d274614b11afbceef1c69e4c50_1.jpg' class='ccImage'> <span class='smallText'>Your first payment will be due today, the second payment will be due in 30 days and the final payment will be due in 60 days. We will charge the credit card you use today for the remaining two payments.</span>");
		$(".selectBuy2").removeClass("activeBuy2");
		$(".threePayBuy2").addClass("activeBuy2");
	});

	$(".affirmPayButt2").click(function() {
		$(".payButt2").removeClass("activeButt2");
		$(this).addClass("activeButt2");
		$(".paymentText2").html("PAYMENTS AS LOW AS $27/MONTH AT 0% APR. PREQUALIFY NOW. <img src='https://mojonow.blob.core.windows.net/cmr/t4406/src/cfaeba99893d4ff092fa374cef4884eb_1.png' class='affirmImage'> <span class='smallText'>Affirm not available in Iowa, West Virginia, and Canada.</span>");
		$(".selectBuy2").removeClass("activeBuy2");
		$(".affirmPayBuy2").addClass("activeBuy2");
	});

});
