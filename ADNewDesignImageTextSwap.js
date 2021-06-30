(function() {

	$('.clickRow1').click(function() {
	  if ($(this).hasClass('activeRow')) {
	  	return;
	  }

	  else {
		$('.openText').slideUp();
		$('.number').removeClass('numberActive');
		$('.clickRow').removeClass('activeRow');
		$(this).addClass('activeRow');
		$('.openText1').slideDown();
		$('.number1').addClass('numberActive');
		$('.mainPic img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7579/src/822b2f81c4a04c96b7a09b97b9be92ae_1.png");
	 }
	});

	$('.clickRow2').click(function() {
	   if ($(this).hasClass('activeRow')) {
	  	 return;
	   }

	  else {
		$('.openText').slideUp();
		$('.number').removeClass('numberActive');
		$('.clickRow').removeClass('activeRow');
		$(this).addClass('activeRow');
		$('.openText2').slideDown();
		$('.number2').addClass('numberActive');
		$('.mainPic img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7579/src/60afcca0589b469ba28ecbfc58882558_1.png");
		}
	});

	$('.clickRow3').click(function() {
		if ($(this).hasClass('activeRow')) {
	  		return;
	  	}

	  else {
		$('.openText').slideUp();
		$('.number').removeClass('numberActive');
		$('.clickRow').removeClass('activeRow');
		$(this).addClass('activeRow');
		$('.openText3').slideDown();
		$('.number3').addClass('numberActive');
		$('.mainPic img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7579/src/61550268b5dc49f0a900d8e90bf86dc6_1.png");
	  }
	});

	$('.clickRow4').click(function() {
		if ($(this).hasClass('activeRow')) {
	  		return;
	  	}

	  else {
		$('.openText').slideUp();
		$('.number').removeClass('numberActive');
		$('.clickRow').removeClass('activeRow');
		$(this).addClass('activeRow');
		$('.openText4').slideDown();
		$('.number4').addClass('numberActive');
		$('.mainPic img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7579/src/dd50350d672744fbad0cbda7bf2d43c8_1.png");
	 }
	});

})();