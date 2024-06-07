			$(document).ready(function() {
					$(".checkbox").click(function() {
						if ( $("#question1").hasClass("active") ) {
							 $("#question1").removeClass("active")
							 $("#question2").addClass("active")
							 $(".inside-progress").css("width", "50%")
						}

						else if ( $("#question2").hasClass("active") ) {
							 $("#question2").removeClass("active")
							 $("#question3").addClass("active")
							 $(".inside-progress").css("width", "75%")
						}

						else if ( $("#question3").hasClass("active") ) {
							 $("#question3").removeClass("active")
							 $("#question4").addClass("active")
							 $(".inside-progress").css("width", "100%");
						}

						else if ( $("#question4").hasClass("active") ) {
							$(".orange-check").hide();
							 $(this).find(".orange-check").show();
							 $(".CTA").fadeIn();
							 
						}

					})

					// changing to random links on submit button click

					$(".CTA").click(function() {
						$(".overlayResults").css("display", "flex");
					})	

			
			})