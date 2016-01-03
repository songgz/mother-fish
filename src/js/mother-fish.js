;(function(){

	this.MotherFish = {
		version: '0.1.0',
	    name: "Mother Fish"
	};

	window.requestAnimFrame = (function() {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
			return window.setTimeout(callback, 1000 / 60);
		};
    })();

	var game = new Game();

	 var gameloop = function(){	 	
    	window.requestAnimFrame(gameloop);
    	game.run();
    };

	window.addEvent('load', gameloop);

})();
