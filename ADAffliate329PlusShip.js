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


					if (byName == 'ropenshaw2') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/ffd06c06a5364d5bb1610f0889562041_1.png");
						$('.topSlogan').html('SPECIAL Green Smoothie Girl Discount: <span class="redLine"></span><span class="msrp">$629</span> $329');
						$('.rowSlogan').html('SPECIAL Green Smoothie Girl Discount: <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329');
						setTimeout(function(){ 
							$('.topText,.rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'ropenshaw') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/ffd06c06a5364d5bb1610f0889562041_1.png");
						$('.topSlogan').html('SPECIAL Green Smoothie Girl Discount: <span class="redLine"></span><span class="msrp">$629</span> $329');
						$('.rowSlogan').html('SPECIAL Green Smoothie Girl Discount: <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329');
						setTimeout(function(){ 
							$('.topText,.rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'posborne') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/0d839f39b91f472ab2087740e5535e80_1.png");
						$('.topSlogan').html("Special Discount for Dr. Osborne's readers: $300 OFF");
						$('.rowSlogan').html("Clean air is essential to health. Most homes contains toxic VOC's, mold, and other chemical preservatives that you don't want in your lungs. That's why I love AirDoctor. Simple, affordable, clean air.");
						setTimeout(function(){ 
							$('.topText,.rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'iwentz') {
						$('.textImg img').attr("src", "https://az686452.vo.msecnd.net/cmr/t7031/src/287e589dc1844fa4a1e8669bd74b7883_1.png");
						$('.topSlogan').html("Special Offer for Dr. Izabella Wentz's readers.");
						$('.rowSlogan').html("$300 OFF FOR DR. IZABELLA WENTZ'S READERS");
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'choprafive') {
						$('.imgCol').hide();						
						$('.topSlogan').html('Special Discount:  $300 Off + New Easy Payment Plans Now Available');
						$('.rowSlogan').html('$300 OFF FOR CHOPRA READERS');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
						}, 100);
					}

					if (byName == 'dwolfe') {
						$('.imgCol').hide();						
						$('.topSlogan').html('David Wolfe Discount: <span class="redLine"></span><span class="msrp">$629</span> $329');
						$('.rowSlogan').html('David Wolfe Discount: <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
						}, 100);
					}

					if (byName == 'wbinley') {
						$('.imgCol').hide();						
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
						}, 100);
					}

					if (byName == 'drkahn') {
						$('.imgCol').hide();						
						$('.topSlogan, .rowSlogan').html('Dr. Kahn Discount: <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
						}, 100);
					}

					if (byName == 'dwolfe2') {
						$('.imgCol').hide();						
						$('.topSlogan').html('David Wolfe Discount: <span class="redLine"></span><span class="msrp">$629</span> $329');
						$('.rowSlogan').html('David Wolfe Discount: <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
						}, 100);
					}


					if (byName == 'wmama2') {
						$('.imgCol').hide();						
						$('.topSlogan, .rowSlogan').html('Wellness Mama Discount: <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
						}, 100);
					}

					if (byName == 'tcochrane') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/06f81c00aada4891a0df1771427048b5_1.png");
						$('.topSlogan, .rowSlogan').html("Teri Cochrane Discount $300 off");
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'katiekimball') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/a764d6c1e2694021ab0f92929f1a209e_1.png");						
						$('.topSlogan').html('Kitchen Stewardship Discount: <span class="redLine"></span><span class="msrp">$629</span> $329');
						$('.rowSlogan').html('Kitchen Stewardship Discount: <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'kordsmeier') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/00f65d6137f841228aa0b3b67837b2e5_1.png");						
						$('.topSlogan').html('Special Offer for Root & Revel');
						$('.rowSlogan').html('Root & Revel Special Discount: <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'awhitten') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/9aff9f38a0234c31a598b1a4b30e0408_1.png");						
						$('.topSlogan').html('Special Offer for The Energy Blueprint');
						$('.rowSlogan').html('The Energy Blueprint Special Discount: <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'drmumby') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/a3dd1e1ab0bb4982973a7f1c3d3cabc0_1.png");						
						$('.topSlogan').html('Special Offer for Dr. Keith Scott-Mumby');
						$('.rowSlogan').html('Dr. Keith Scott-Mumby Special Discount: <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'thedrcom') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/c93286fe56e741edb50bcbb59f2810c3_1.png");						
						$('.topSlogan').html('Special Offer for TheDr.com: $300 off!');
						$('.rowSlogan').html('TheDr.com Special Discount: <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'mtyrrell') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/0b91a8c47fdd4c1b9bbdfaab71781bb7_1.png");						
						$('.topSlogan').html('Special Offer for friends of Michael Tyrrell: $300 off!');
						$('.rowSlogan').html('Special Offer for friends of Michael Tyrrell:  <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'empoweredsustenance') {
						$('.imgCol').hide();
						$('.topText').addClass("textMiddle");
						$('.blueRow').addClass("orangeBomb");							
						$('.topSlogan').html('Special Offer for <img src="https://mojonow.blob.core.windows.net/cmr/t7031/src/2e949634b5db4a36b600028b606a3e1d_1.png" alt="" style="vertical-align: -5px;"> readers');
						$('.rowSlogan').html('<s style="color: red;"><span style="color: #ffffff;">$629</span></s> $300 OFF FOR EMPOWERED SUSTENANCE READERS');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
						}, 100);
					}

					if (byName == 'drjoseph') {
						$('.imgCol').hide();							
						$('.topSlogan').html('Special Discount:  $300 Off + New Easy Payment Plans Now Available');
						$('.rowSlogan').html('$300 OFF FOR DR. JOSEPH ARENA');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
						}, 100);
					}

					if (byName == 'bmowll') {
						$('.imgCol').hide();
						$('.topText').addClass("textMiddle");
						$('.blueRow').addClass("orangeBomb");							
						$('.topSlogan').html('<img src="https://mojonow.blob.core.windows.net/cmr/t7031/src/8b4afe6ac8484890bb956c0544a0fb05_1.png" alt="" style="vertical-align: -5px;"> Special Discount $300 off');
						$('.rowSlogan').html('Special Discount <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
						}, 100);
					}

					if (byName == 'nh365') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/add9d504f38a49c4a90713a7b3932298_1.png");						
						$('.topSlogan').html('Special Offer for NaturalHealth365: <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329');
						$('.rowSlogan').html('NaturalHealth365 Special Discount: <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'msands') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/03873a2a6ac5478ea56f77a04c5e5dfb_1.png");						
						$('.topSlogan').html('Special Offer for Glow Natural Wellness: $300 OFF');
						$('.rowSlogan').html('Special Offer for Glow Natural Wellness: <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'crodriquez') {
						$('.imgCol').hide();
						$('.topText').addClass("textMiddle");
						$('.topSlogan').html('Special Discount for Cory Rodriguez Enterprises: $300 Off');
						$('.rowSlogan').html('Special Discount for Cory Rodriguez Enterprises: $300 Off');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
						}, 100);
					}

					if (byName == 'msands') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/8a4d6081a1fd4ae989ab3a61396641ed_1.png");						
						$('.topSlogan').html('Rebel Health Tribe Special Discount: <span class="redLine"></span><span class="msrp">$629</span> $329');
						$('.rowSlogan').html('Rebel Health Tribe Special Discount: <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'reggieblack') {
						$('.imgCol').hide();
						$('.topText').addClass("textMiddle");
						$('.blueRow').addClass("orangeBomb");							
						$('.topSlogan').html('<img src="https://mojonow.blob.core.windows.net/cmr/t7031/src/4993b7e7f01a43da91f35f5ebdcc3e81_1.png" alt="" style="vertical-align: -5px;"> <span class="redLine"></span><span class="msrp">$629</span> $329');
						$('.rowSlogan').html('Better Way Health Special Discount: <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
						}, 100);
					}

					if (byName == 'cnutrition') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/235d7a4417f74f55b2aa379f36215d92_1.png");						
						$('.topSlogan').html('Calton Nutrition Limited Special Discount: $300 off');
						$('.rowSlogan').html('Calton Nutrition Limited Special Discount: $300 off');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'jrignola') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/c3fb4e3b8199471e9d93b1423bd62afd_1.png");						
						$('.topSlogan').html('Special Discount: $300 off');
						$('.rowSlogan').html('Special Discount: $300 off');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'pedramwell') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/7fed74cec70a4810846e064384fdb5f1_1.png");						
						$('.topSlogan').html('Special Discount: $300 off');
						$('.rowSlogan').html('Special Discount: $300 off');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'athompson') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/f25c060572e549f8ab5020143ace354e_1.png");						
						$('.topSlogan').html('Special Discount: <span class="redLine"></span><span class="msrp">$629</span> $329');
						$('.rowSlogan').html('Special Discount: <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'pedramwelltwo') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/7fed74cec70a4810846e064384fdb5f1_1.png");						
						$('.topSlogan').html('Special Discount: $300 off');
						$('.rowSlogan').html('Special Discount: $300 off');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);


					}

					if (byName == 'mwilliams') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/e2903789fb194441b0e8d43fa8f1f81f_1.png");						
						$('.topSlogan').html('Special Offer: <span class="redLine"></span><span class="msrp">$629</span> $329');
						$('.rowSlogan').html('Special Offer: $300 Off <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329 + New Easy Payment Plans Now Available');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'rherring') {
						$('.imgCol').hide();
						$('.topText').addClass("textMiddle");
						$('.topSlogan').html('Earth Conscious Life Special Discount: $300 off');
						$('.rowSlogan').html('Earth Conscious Life Special Discount: $300 off');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
						}, 100);
					}

					if (byName == 'bvaszily') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/4034e88c570843e1bc08e036f2e80045_1.png");						
						$('.topSlogan').html('Special Dicount: <span class="redLine"></span><span class="msrp">$629</span> $329');
						$('.rowSlogan').html('Instantly Improve the Quality of your Indoor Air with AirDoctor™');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'drjpubllc') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/a0125a37ed11414493305594f6e29679_1.png");						
						$('.topSlogan').html('<span class="redLine"></span><span class="msrp">$629</span> TODAY SAVE $300! PAY ONLY $329');
						$('.rowSlogan').html('Special Offer: $300 Off <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329 + New Easy Payment Plans Now Available');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'amelrose') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/d13e300f7aab4880a7259e41d9c874fa_1.png");						
						$('.topSlogan').html('Special Discount: $300 off + New Easy Payment Plans Now Available');
						$('.rowSlogan').html('Instantly Improve the Quality of your Indoor Air with AirDoctor™');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'drmariza') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/6ff93c77992344dfa8de0ce29f072027_1.png");						
						$('.topSlogan').html('<span class="redLine"></span><span class="msrp">$629</span> TODAY SAVE $300! PAY ONLY $329');
						$('.rowSlogan').html('Special Offer: $300 Off <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329 + New Easy Payment Plans Now Available');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'lukstorey') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/db682e80b3e443ba8e47e89f9c38b065_1.png");						
						$('.topSlogan').html('<span class="redLine"></span><span class="msrp">$629</span> TODAY SAVE $300! PAY ONLY $329');
						$('.rowSlogan').html('Special Offer: $300 Off <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329 + New Easy Payment Plans Now Available');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'mbuyerstore') {
						$('.imgCol').hide();
						$('.topText').addClass("textMiddle");
						$('.topSlogan').html('July 4th Sale: <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $300 OFF! PAY ONLY $329.00');
						$('.rowSlogan').html('July 4th Sale: <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $300 OFF! PAY ONLY $329.00');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
						}, 100);
					}

					if (byName == 'refilms') {
						$('.topSlogan').html('<img src="https://mojonow.blob.core.windows.net/cmr/t7031/src/ec60051e03ff4183bd7247e957986cbe_1.png" alt="" class="refilmsImg"> Special Discount: $300 off');
						$('.topText').addClass("textMiddle");
						$('.blueRow').addClass("orangeBomb");	
						$('.rowSlogan').html(' Revealed Films Special Discount:  <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
						}, 100);
					}

					if (byName == 'refilms2') {
						$('.topSlogan').html('<img src="https://mojonow.blob.core.windows.net/cmr/t7031/src/ec60051e03ff4183bd7247e957986cbe_1.png" alt="" class="refilmsImg"> Special Discount: $300 off');
						$('.topText').addClass("textMiddle");
						$('.blueRow').addClass("orangeBomb");	
						$('.rowSlogan').html(' Revealed Films Special Discount:  <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
						}, 100);
					}

					if (byName == 'drevillanueva') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/cb3cc3644b5a4757b0f76daf458986b3_1.png");						
						$('.topSlogan').html('Special Discount for Dr. Elena Villanueva: $300 off');
						$('.rowSlogan').html('Special Discount for Dr. Elena Villanueva: $300 off <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'kellyborganmd') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/ba8b88fab4cf42fbbc42513c52b1c7a9_1.png");						
						$('.topSlogan').html('Instantly Improve the Quality of your Indoor Air with AirDoctor™');
						$('.rowSlogan').html('Instantly Improve the Quality of your Indoor Air with AirDoctor™');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'jotto') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/d00c6dbcc9874e138674dc7ac7ce7fa8_1.png");						
						$('.topSlogan').html('Jonathan Otto Discount: <span class="redLine"></span><span class="msrp">$629</span> $329');
						$('.rowSlogan').html('Jonathan Otto Discount: <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (byName == 'drshippy') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7031/src/c9094a5d66414e00b946488f9c12cc88_1.png");						
						$('.topSlogan').html('<span class="redLine"></span><span class="msrp">$629</span> TODAY SAVE $300! PAY ONLY $329');
						$('.rowSlogan').html('Special Offer: $300 Off <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329 + New Easy Payment Plans Now Available');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 100);
					}

					if (window.location.href.indexOf("/Home") > -1) {
						$('.imgCol').hide();
						$('.topText').addClass("textMiddle");
						$('.topSlogan').html('<span class="redLine"></span><span class="msrp">$629</span> TODAY SAVE $300! PAY ONLY $329');
						$('.rowSlogan').html('Special Offer: $300 Off <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329 + New Easy Payment Plans Now Available');
						$('.topText, .rowSlogan').addClass("fadeIn");
					}

					
   })(); 