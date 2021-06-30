<style>
.overlayreturnPol{width: 100%; height: 100%; position: fixed; top: 0; left: 0; right: 0; bottom: 0; cursor: pointer; background-color:rgba(0, 0, 0, 0.7); display: none;
     -webkit-animation: fadein .5s; animation: fadein .5s; z-index: 2000000; overflow: scroll;}
.close-overlayreturnPol{cursor: pointer; color: #000; font-size: 15px; font-weight: bold; 
            display: inline-block; float: right; margin-top: -30px;}
.overlayreturnPol-content{margin: 200px auto; background: #fff; max-width: 800px;
              padding: 25px 20px; position: relative;}
.overlayreturnPol-content p{color: #000; margin: 0; padding: 0; text-align: left;}

 </style>
  <div class="overlayreturnPol">
      <div class="row">
      <div class="containerReturn">
        <div class="overlayreturnPol-content"><div class="close-overlayreturnPol">X</div>
        <p><b>Return Policy<br>The Prosvent 30-Day Money Back Guarantee</b></p><br>
        <p>If, within 30 days of receiving Prosvent, you are not thrilled with your results, simply call customer service at (800) 743-9854 to cancel your order and return the unused portion for a complete refund of your purchase price (less shipping and processing).</p>
      </div>
      </div>
    </div> 
    </div> 

<script type="text/javascript">

$(document).ready(function() {

  $(".navFooter a.widget-nav__link:eq(1)").click(function(e) {
    e.preventDefault();
      $('html, body').animate({
            scrollTop: $("#benefits").offset().top
          }, 1000);
    });

  $(".navFooter a.widget-nav__link:eq(2)").click(function(e) {
    e.preventDefault();
      $('html, body').animate({
            scrollTop: $("#ingredients").offset().top
          }, 1000);
    });

  $(".navFooter a.widget-nav__link:eq(3)").click(function(e) {
    e.preventDefault();
      $('html, body').animate({
            scrollTop: $("#faq").offset().top
          }, 1000);
    });

    $(".navFooter a.widget-nav__link:eq(5)").click(function(e) {
    e.preventDefault();
       $(".overlayreturnPol").fadeIn();

    });

  $(".close-overlayreturnPol").click(function(){
     $(".overlayreturnPol").fadeOut();
    
  });

});

</script>


