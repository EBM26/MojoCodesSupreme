			$( document ).ready( function () { 

				// Need to make percent and inc global to the click function

				var percent = 16;

				var inc = 16;

				// We have to get the target of the click event directly (the "e").

				// Also, we changed the click delegate teo the div holding ALL the questions <div>s. I added the new class
				// ".question-container" for this to work.

				$( ".question-container" ).click( function ( e ) { 

					// The target is the checkbox (<input>), so we have to use pure JavaScript to grab its ancestor (grandparent), which is the enclosing question <div>.

					let ck = e.target.parentNode.parentNode;

					// Give jQuery the question <div> to return the next question <div>.

					let ck1 = $( ck ).next();

					$( ck ).removeClass( "active" );

					$( ck1 ).addClass( "active" );

					$( ".inside-progress" ).css( "width", (percent + inc) + "%" );

					// Increment our global percent variable.

					percent += inc;


				} )

			} );


			$(".CTA").click(function() {

				var links = ["results1.php", "results2.php", "results3.php"]

				var random = Math.floor(Math.random() * links.length);

				var sendCust = links[random]

				window.location = sendCust;

			});