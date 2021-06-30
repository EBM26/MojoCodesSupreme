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


					if (byName == 'ccenterhealth') {
						 var linkWidget = $("a.widget-nav__link:eq(6)");
						  $("a.widget-nav__link:eq(6)").attr("href", "https://store.airdoctorpro.com/?c=ccenterhealthsto");
						  console.log("got your search");
						  console.log(linkWidget);

					}


   })();