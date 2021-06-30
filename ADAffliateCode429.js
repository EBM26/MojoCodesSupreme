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


					if (byName == 'bzerbe') {
						$('.topText').addClass("textMiddle");
						$('.topRowBlue').addClass("orangeRow");
						$('.textImg img').attr("src", "https://mojonow.blob.core.windows.net/cmr/t7199/src/5e98211eb3c142078002dc15731043f5_1.png");
						$('.topSlogan, .rowSlogan').html('SPECIAL OFFER: $200 OFF FOR Anti-Cancer Revolution visitors');
						setTimeout(function(){ 
							$('.topText, .rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 200);
					}

					if (window.location.href.indexOf("/Home") > -1) {
						$('.imgCol').hide();
						$('.topText').addClass("textMiddle");
						$('.topSlogan, .rowSlogan').html('SPECIAL OFFER: $200 OFF');
						$('.topText, .rowSlogan').addClass("fadeIn");
					}

					


   })();