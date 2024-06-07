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


					if (byName == 'fsfsemfs') {
						 $("a.widget-nav__link:eq(2)").click(function(e) {
						    e.preventDefault();
						      window.location.href = "https://store.airdoctorpro.com/?c=emstfsfsmfs";
						    });
					}

					if (byName == 'smsfsfsmfs') {
						  $("a.widget-nav__link:eq(2)").click(function(e) {
						    e.preventDefault();
						      window.location.href = "https://store.airdoctorpro.com/?c=smsfssfsmfs";
						    });
					}

					if (byName == 'gfsfsmfs') {
						$("a.widget-nav__link:eq(2)").click(function(e) {
						    e.preventDefault();
						      window.location.href = "https://store.airdoctorpro.com/?c=glgfsfsmfs";
						    });	
					}

					if (byName == 'bfsfsmfs') {
						$("a.widget-nav__link:eq(2)").click(function(e) {
						    e.preventDefault();
						      window.location.href = "https://store.airdoctorpro.com/?c=bngfsfsmfs";
						    });						
					}

					if (byName == 'ytfsfsmfs') {
						$("a.widget-nav__link:eq(2)").click(function(e) {
						    e.preventDefault();
						      window.location.href = "https://store.airdoctorpro.com/?c=ytbfsfsmfs";
						    });						
					}

   })();




