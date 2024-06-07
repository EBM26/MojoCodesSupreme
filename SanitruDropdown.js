$(document).ready(function() {

      function DescOn() {
        $(".hiddenRow").slideDown();
        $(".plusSVG").addClass("animate");
     
      };

      function DescOff() {
        $(".hiddenRow").slideUp();
        $(".plusSVG").removeClass("animate");
     
      };

     $('.textClick').click(function() {
            return (this.tog = !this.tog) ? DescOn() : DescOff();
     });

});