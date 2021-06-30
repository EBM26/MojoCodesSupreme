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

					if (byName == 'drvivchen') {
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7878/src/c0f869e61b2e4f6cae3c78504de34b30_1.png");
						$('.topSlogan').html("PLATEFUL HEALTH SPECIAL DISCOUNT");
						$('.midText').html('<span class="redLine"></span><span class="msrp">$629</span> $300 OFF + Free Carbon Filter <br><span style="font-size: 16px;">(Total Savings of $360)</span>');
						setTimeout(function(){ 
							$('.topSlogan, .midText, .textImg').addClass("fadeIn");
						}, 200);
					}


					if (window.location.href.indexOf("/Home") > -1) {
						$('.midText').html('<span class="redLine"></span><span class="msrp">$629</span> $300 OFF + Free Carbon Filter <br><span style="font-size: 16px;">(Total Savings of $360)</span>');
						$('.midText').addClass("fadeIn");
					}



   })();