var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player1', {
    events: {
      'onReady': onPlayerReady
    }
  });
};


function onPlayerReady(event) {

   $(".IMG1").click(function(){
		$(".overlay1").fadeIn();
    player.playVideo();
	});


   $(".close-overlay1").click(function(){
		$(".overlay1").fadeOut();
		player.pauseVideo();
	});

};




 
