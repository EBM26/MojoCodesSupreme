	$(document).ready(function() {

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

					if (byName == 'drvivienchen') {
						$('.influImage').hide();
						$('.influTitle').html('Special Deal for Dr. Vivian Detox Class');
						$('.influTitle2').html('Dr. Vivian');
						$('.hisHers').html('her');
					};

					
 			});
