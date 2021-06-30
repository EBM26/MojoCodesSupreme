
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

					if (byName == 'thepaleomom') {
						$('.influImage').show();
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t5579/src/2c248551f54742e5bfdd6eb15f0e4048_1.png");
						$('.influTitle').html('Paleo Mom');
						$('.hisHers').html('her');

					};


					if (byName == 'ballantyne') {
						$('.influImage').show();
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t5579/src/ba50b3034cec40eabd2d74bdeb4a0300_1.png");
						$('.influTitle').html('Whole View');
						$('.hisHers').html('their');

					};

					if (byName == 'drjockers') {
						$('.influImage').show();
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t5579/src/6f253667fe64476694f526123206257a_1.png");
						$('.influTitle').html('Dr. David Jocker');
						$('.hisHers').html('his');

					};

					if (byName == 'MHyman') {
						$('.influImage').show();
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t5579/src/2450e24b748048929761ee381433ce2f_1.png");
						$('.influTitle').html('Dr. Hyman');
						$('.hisHers').html('his');

					};

					if (byName == 'dhtnn') {
						$('.influImage').show();
						$('.influImage img').attr("src","https://mojonow.blob.core.windows.net/cmr/t5579/src/2450e24b748048929761ee381433ce2f_1.png");
						$('.influTitle').html('Dr. Hyman');
						$('.hisHers').html('his');

					};
