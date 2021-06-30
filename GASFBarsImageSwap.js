<style>
.overlayCinnamon{width: 100%; height: 100%; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color:rgba(119, 119, 119, 0.7); display: none;
		 -webkit-animation: fadein .5s; animation: fadein .5s; z-index: 2000000; overflow: scroll;}
.close-overlayCinnamon{right: 5px; top: 5px; z-index: 2000000; cursor: pointer; position: absolute; 
					   color: #2F4858; font-size: 30px; font-weight: bold; font-family: 'Lato', sans-serif;}
.overlayCinnamon-content{margin: 150px auto; max-width: 1000px; position: relative;}
.backImg{max-width: 100%;}
.clear{clear: both;}
.leftFloat{display: inline-block; float: left; width: 50%;}
a:link, a:visited, a:active{text-decoration: none; color: inherit;}
.textDiv{background: #EAEDEE; color: #2F4858; font-family: 'Lato', sans-serif; font-size: 20px; 
		padding: 10px 20px;}
p{margin: 0; padding: 0;}
.title{font-size: 30px; text-transform: uppercase; font-weight:bold;}
.popupHR{width: 165px; border: 0; border-top: 2px solid #2F4858; margin: 10px 0;}
.popupList li{font-size: 18px; margin-bottom: 10px; list-style-image: url(https://mojonow.blob.core.windows.net/cmr/t4535/src/ee43eac272d64b3db3babc757b0e2bf9_2.svg);}
.popupList{margin: 0; margin-top: 20px;}
.smallText{font-size: 14px !important;}
@media only screen and (max-width: 1023px) {
	.title{font-size: 20px !important;}
	.overlayCinnamon-content{max-width: 720px;}
	.close-overlayCinnamon{font-size: 25px;}
	.textDiv p{font-size: 16px !important;}
	.popupList li{margin-bottom: 0; font-size: 14px;}
}

@media only screen and (max-width: 767px) {
	.mobileFloat{float: none; width: 90%; display: block; margin: auto;}
	.overlayCinnamon-content{margin: 50px auto;}
	.close-overlayCinnamon{right: 30px;}
}

 </style>
	<div class="overlayCinnamon">
			<div class="row">
			<div class="container relative">
				<div class="overlayCinnamon-content">
					<div class="close-overlayCinnamon">X</div>
					<div class="leftFloat mobileFloat">
						<img src="https://mojonow.blob.core.windows.net/cmr/t4468/src/c2553497c0bb4892b8d551c0ea99ae66_1.jpg" alt="" class="backImg">
					</div>
					<div class="leftFloat textDiv mobileFloat">
						<p class="title">Superfood Bars</p>
						<hr class="popupHR">
						<p>Now you can enjoy farm to table fresh superfood nutrition in a delicious convenient energy bar. Good for you has never tasted so good and kids love them too!<br>
						Each Bar includes 2 1/2 servings of your daily fruits and veggies and has:</p>
						<div class="leftFloat">
							<ul class="popupList">
								<li>Only 120 calories</li>
								<li>Gluten free</li>
								<li>Soy free</li>
							</ul>
						</div>	
						<div class="leftFloat">
							<ul class="popupList">
								<li>USDA organic</li>
								<li>Non-GMO</li>
							</ul>
						</div>	
						<div class="clear"></div>
						<p class="smallText"><a href="/prop65" target="_blank">California Residents: Proposition 65 information can be found <u>here</u>.</a></p>	
					</div>
					<div class="clear"></div>
				</div>
			</div>
		</div> 
</div> 


<script>


 $(document).ready(function() {

    $(".smallPic1").click(function() {
         $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t4468/src/6d637b2782a24d1989a2b76431fcd4c8_1.png");

    });

    $(".smallPic2").click(function() {
         $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t4468/src/b5eb6540912e40519c784d2efbddc330_1.png");

    });
    
    $(".smallPic3").click(function() {
         $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t4468/src/e3f662abaf0c4aa9a4f28aa8796caff0_1.png");

    });

     $(".cinnamon").click(function(){
		$(".overlayCinnamon").fadeIn();
	});
 
 	$(".close-overlayCinnamon").click(function(){
		$(".overlayCinnamon").fadeOut();
	});
            
});



 </script>