$(document).ready(function() {

   function SubscribeView() {   
     $(".subRow").addClass("flexing");
     $(".optionsRow").removeClass("flexing");
     $("#topText").html("Subscription Offer (Pay $9.95 Today)");
     $("#later").html("Or One-Time Purchase (Up to 25% Off)");
     $("#buttonSub").html("View Options");
   }

   function OptionsView() {   
     $(".subRow").removeClass("flexing");
     $(".optionsRow").addClass("flexing");
     $("#topText").html("One-Time Purchase (Up To 25% Off)");
     $("#later").html("Or Try Now Pay Later. Pay Only $9.95 Today");
     $("#buttonSub").html("Subscribe Now");
   }

	$('#buttonSub').click(function() { 
        return (this.tog = !this.tog) ? SubscribeView() : OptionsView();
   });
});



