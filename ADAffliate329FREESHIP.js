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


					if (byName == 'nh365') {
						$('.affIMG').addClass("disIMG");
						$('.affBann').html("NATURALHEALTH365 SPECIAL: SAVE UP TO $780 FOR A LIMITED TIME ONLY!");
					}



   })();