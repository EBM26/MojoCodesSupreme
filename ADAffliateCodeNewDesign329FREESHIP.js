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

					if (byName == 'drz') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7092/src/875be2dcd65747c78a9dd4cab625a792_1.png");
						$('.topSlogan').html("SPECIAL DR. Z & MAMA Z DISCOUNT");
						$('.midText').html('<span class="redLine"></span><span class="msrp">$629</span> $300 OFF');
						setTimeout(function(){ 
							$('.topSlogan, .midText, .textImg').addClass("fadeIn");
						}, 200);
					}

					if (byName == 'drericz') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7092/src/875be2dcd65747c78a9dd4cab625a792_1.png");
						$('.topSlogan').html("SPECIAL DR. Z & MAMA Z DISCOUNT");
						$('.midText').html('<span class="redLine"></span><span class="msrp">$629</span> $300 OFF');
						setTimeout(function(){ 
							$('.topSlogan, .midText, .textImg').addClass("fadeIn");
						}, 200);
					}

					if (byName == 'mbthree') {
						$('.topSlogan').html("HOLIDAY SALE");
						$('.midText').html('<span class="redLine"></span><span class="msrp">$629</span> $300 OFF + Free Shipping');
						$('.topBlueRow').addClass("redRow");
						setTimeout(function(){ 
							$('.topSlogan, .midText').addClass("fadeIn");
						}, 200);
					}

					if (window.location.href.indexOf("/Home") > -1) {
						$('.midText').html('<span class="redLine"></span><span class="msrp">$629</span> $300 OFF');
						$('.midText').addClass("fadeIn");
					}



   })();