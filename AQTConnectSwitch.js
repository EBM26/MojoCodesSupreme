$(document).ready(function() {


	 $("#AQTConnect").click(function() {
			$(".tpp").html("$166.33");  
			$(".app").html("$44");  
			$(".connectDetails, .easierSection").show();  
			$(".checkCol1").addClass("greyBack");
			$(".checkCol2").removeClass("greyBack");
			$(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t9383/src/b541b58451564151af514a05d389ff45_1.png");  
			$(".smallPic1 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t9383/src/04b10924c33f4e7983eadbe407529323_1.png");  
			$(".smallPic4 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t9383/src/377a03a97bb54e3eb3bac2e70f416693_1.png");  
			$(".smallPic1").click(function() {
 		    $(".videoCustom").hide();
  		    $(".bigPic").show();
         	$(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t9383/src/b541b58451564151af514a05d389ff45_1.png");
			 });
			$(".smallPic2").click(function() {
 		        $(".videoCustom").hide();
  		        $(".bigPic").show();
         		$(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t9383/src/e7e403b49c5848419cb56f4b719e7a4c_1.png");
			});
			$(".smallPic3").click(function() {
 		         $(".videoCustom").hide();
  		        $(".bigPic").show();
         		$(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t9383/src/2bdaed6bb98041ea8eb15c0725486507_1.png");
         	});
			$(".smallPic4").click(function() {
 		        $(".bigPic").hide();
         		$(".videoCustom").show();
			});
		});

		 $("#AQTClassic").click(function() {
 		    $(".videoCustom").hide();
  		    $(".bigPic").show();
		 	$(".tpp").html("$149.66");  
			$(".app").html("$40"); 
			$(".connectDetails, .easierSection").hide();
			$(".checkCol2").addClass("greyBack");
			$(".checkCol1").removeClass("greyBack");  
			$(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t9383/src/dd96a246d5964106b815b5d4e9dcbc26_1.png");  
			$(".smallPic1 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t9383/src/dd96a246d5964106b815b5d4e9dcbc26_1.png");  
			$(".smallPic4 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t9383/src/61d9b133b088444ba8253f82639416f7_1.jpg");  
			$(".smallPic1").click(function() {
         		$(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t9383/src/dd96a246d5964106b815b5d4e9dcbc26_1.png");
			 });
			$(".smallPic2").click(function() {
         		$(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t9383/src/e7e403b49c5848419cb56f4b719e7a4c_1.png");
			});
			$(".smallPic3").click(function() {
         		$(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t9383/src/2bdaed6bb98041ea8eb15c0725486507_1.png");
         	});
			$(".smallPic4").click(function() {
				$(".bigPic").show();
         		$(".videoCustom").hide();
         		$(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t9383/src/9942774fb76b4f92a63353eeadae09ae_1.jpg");
			});
		});

 	$("#AQTConnect").trigger('click');
});
