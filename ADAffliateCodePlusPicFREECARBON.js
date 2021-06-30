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


					if (byName == 'cwark') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7156/src/9460db2a79744e0bb5ea380eb36e9bf7_1.png");
						$('.topSlogan').html('Chris Beat Cancer Special Discount: <span class="redLine"></span><span class="msrp">$629</span> $329 + Free Carbon Filter (Total Savings of $360)');
						$('.rowSlogan').html('Chris Beat Cancer Special Discount: <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329 + Free Carbon Filter (Total Savings of $360)');
						setTimeout(function(){ 
							$('.topText,.rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 200);
					}

					if (byName == 'erinelizabeth') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7156/src/5b33ad2385fa49dd8e2323196bb40bd6_1.png");
						$('.topSlogan').html('Erin Elizabeth\'s Discount:  <span class="redLine"></span><span class="msrp">$629</span> $329 + Free Carbon Filter (Total Savings of $360)');
						$('.rowSlogan').html('Erin Elizabeth\'s Discount:  <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329 + Free Carbon Filter (Total Savings of $360)');
						setTimeout(function(){ 
							$('.topText,.rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 200);
					}

					if (window.location.href.indexOf("/Home") > -1) {
						$('.imgCol').hide();
						$('.topText').addClass("textMiddle");
						$('.topSlogan').html('Special Discount: <span class="redLine"></span><span class="msrp">$629</span> $329 + Free Carbon Filter (Total Savings of $360)');
						$('.rowSlogan').html('Special Discount: <span class="redLine"></span><span class="msrp">$629</span> $329 + Free Carbon Filter (Total Savings of $360)');
						$('.topText, .rowSlogan').addClass("fadeIn");
					}


   })();