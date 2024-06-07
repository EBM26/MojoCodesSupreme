$(document).ready(function() {

   function SpecsOpen() {   
    $(".answerDiv").slideDown();
    $(".plusIcon").html("-");
   }

   function SpecsClosed() {   
    $(".answerDiv").slideUp();
    $(".plusIcon").html("+");
   }

	$('.specsText').click(function() { 
        return (this.tog = !this.tog) ? SpecsOpen() : SpecsClosed();
   });
});



