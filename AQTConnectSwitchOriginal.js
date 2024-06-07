$(document).ready(function() {


	 $("#AQTConnect").click(function() {
			$(".tpp").html("$116.33");  
			$(".app").html("$31");  
			$(".connectDetails, .easierSection").show();  
			$(".checkCol1").addClass("greyBack");
			$(".checkCol2").removeClass("greyBack");
			$(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t10816/src/9beb503a8e97419a8039594df2a60352_1.png");  
			$(".smallPic1 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t10816/src/9beb503a8e97419a8039594df2a60352_1.png");  
			$(".smallPic4 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t9383/src/377a03a97bb54e3eb3bac2e70f416693_1.png");  
			$(".smallPic1").click(function() {
 		    $(".videoCustom").hide();
  		    $(".bigPic").show();
         	$(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t10816/src/9beb503a8e97419a8039594df2a60352_1.png");
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
		 	$(".tpp").html("$99.66");  
			$(".app").html("$27"); 
			$(".connectDetails, .easierSection").hide();
			$(".checkCol2").addClass("greyBack");
			$(".checkCol1").removeClass("greyBack");  
			$(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t10816/src/fd37d5c84acc4a45a88c9093448645fa_1.png");  
			$(".smallPic1 img").attr("src","https://mojonow.blob.core.windows.net/cmr/t10816/src/fd37d5c84acc4a45a88c9093448645fa_1.png");  
			$(".smallPic4 img").attr("https://mojonow.blob.core.windows.net/cmr/t9383/src/377a03a97bb54e3eb3bac2e70f416693_1.png");  
			$(".smallPic1").click(function() {
         		$(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t10816/src/fd37d5c84acc4a45a88c9093448645fa_1.png");
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
