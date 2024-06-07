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


					if (byName == 'sntit') {
						$('.bigTitle').html('Chris Beat Cancer Special Discount: <span class="redLine"></span><span class="msrp">$629</span> $329 + Free Carbon Filter (Total Savings of $360)');
						$('.bigTitle').html('Chris Beat Cancer Special Discount: <s style="color: red;"><span style="color: #ffffff;">$629</span></s> $329 + Free Carbon Filter (Total Savings of $360)');
						setTimeout(function(){ 
							$('.topText,.rowSlogan').addClass("fadeIn");
							$('.imgCol').fadeIn();
						}, 200);
					}


   })();