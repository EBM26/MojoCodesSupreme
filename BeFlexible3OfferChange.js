$(function () {
	
	$('#offer-checkboxUltra').click(function() {

		 $('.totalRow').show();
		 $('#offer-checkbox, #offerRegular').prop('checked', false);
		 $('.bottleIMG img').attr("src","https://mojonow.blob.core.windows.net/cmr/t4212/src/48060bcee19643c6bbf56436bad004ac_1.png");
		 $('#OffName').html("7-day BeFlexible Ultra Challenge");
		 $('#OffVIPPrice').html("$99.90");
		 $('#TotalPrice').html("$104.90");
		 $('.lastRow').show();

   });

   $('#offer-checkbox').click(function() {

		 $('.totalRow').show();
		 $('#offer-checkboxUltra, #offerRegular').prop('checked', false);
		 $('.bottleIMG img').attr("src","https://mojonow.blob.core.windows.net/cmr/t4212/src/a5f5663a0dc34f5e85482bc2a6d148a9_1.png");
		 $('#OffName').html("7-day BeFlexible Challenge");
		 $('#OffVIPPrice').html("$79.90");
		 $('#TotalPrice').html("$84.90");
		 $('.lastRow').show();
   });

    $('#offerRegular').click(function() {

		 $('.totalRow').show();
		 $('#offer-checkboxUltra, #offer-checkbox').prop('checked', false);
		 $('.bottleIMG img').attr("src","https://mojonow.blob.core.windows.net/cmr/t3743/src/2071fb25ccac420db5c2b8f1d1d5d12f_1.png");
		 $('#OffName').html("7-day BeFlexible Challenge");
		 $('#OffVIPPrice').hide();
		 $('#TotalPrice').html("$5.00");
		 $('.lastRow').hide();
   });

});

