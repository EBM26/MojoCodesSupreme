(function() {
			$.extend({
					  getUrlVars: function(){
					    var vars = [], hash;
					    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
					    for(var i = 0; i < hashes.length; i++)
					    {
					      hash = hashes[i].split('=');
					      vars.push(hash[0]);
					      vars[hash[0]] = hash[1];
					    }
					    return vars;
					  },
					  getUrlVar: function(name){
					    return $.getUrlVars()[name];
					  }
					});
				
					var byName = $.getUrlVar('c');


					if (byName == 'mb4') {
						$('.imgCol').hide();
						$('.topText').addClass("textMiddle");
						$('.topSlogan').html('<s style="color: red;"><span style="color: #ffffff;">$629</span></s> <span style="color: red">TODAY SAVE $300!</span> PAY ONLY $329 + Free Shipping ');
						$('.rowSlogan').html('Special Offer: $300 Off <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329 + Free shipping');
						setTimeout(function(){ 
							$('.topText,.rowSlogan').addClass("fadeIn");
						}, 500);
					}

					if (byName == 'tybollinger') {
						$('.topBlueRow').addClass("orangeRow");
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7092/src/256bbdcf65cc4fb6b753addd120190f5_1.png");
						$('.textImg').addClass("smallPic");
						$('.topSlogan').html('<s style="color: red;"><span style="color: #ffffff;">$629</span></s> <span style="color: red">TODAY SAVE $300!</span> PAY ONLY $329 + Free Shipping');
						$('.rowSlogan').html('Special Offer: $300 Off <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329 + Free shipping');
						setTimeout(function(){ 
							$('.topText,.rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 500);
					}

					if (byName == 'rsternagel') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7081/src/0175fc48c5ce45b6841dae4e95325164_1.png");
						$('.topSlogan, .rowSlogan').html("The Stern Method Discount $300 off + Free Shipping");
						setTimeout(function(){ 
							$('.topText,.rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'drvivienchen') {
						$('.topSlogan, .rowSlogan').html("Special Deal for Dr. Vivian Detox Class: $300 off + Free Shipping");
						setTimeout(function(){ 
							$('.topText,.rowSlogan').addClass("fadeIn");
						}, 100);
					}

					if (byName == 'emartin') {
						$('.imgCol').hide();
						$('.topBlueRow').addClass("orangeRow");
						$('.topText').addClass("textMiddle");
						$('.topSlogan').html('<img src="https://mojonow.blob.core.windows.net/cmr/t7092/src/b6acf1f0eced4022a946eb58b39c2599_1.png" alt="" style="vertical-align: middle; margin-right: 10px;"> Special Discount:  <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329 + Free Shipping (Total Saving of $330)');
						$('.rowSlogan').html('Special Discount: <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329 + Free shipping');
						setTimeout(function(){ 
							$('.topText,.rowSlogan').addClass("fadeIn");
						}, 500);
					}


					if (window.location.href.indexOf("/Home") > -1) {
						$('.imgCol').hide();
						$('.topText').addClass("textMiddle");
						$('.topSlogan').html('<s style="color: red;"><span style="color: #ffffff;">$629</span></s> <span style="color: red">TODAY SAVE $300!</span> PAY ONLY $329 + Free Shipping');
						$('.rowSlogan').html('Special Offer: $300 Off <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329 + Free shipping');
						$('.topText, .rowSlogan').addClass("fadeIn");
					}



   })();