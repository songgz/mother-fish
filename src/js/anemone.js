var  Anemone = new Class({
    initialize: function(num){
    	this.num = num;
    	this.x = 16 * this.num + Math.random() * 20;
    	this.h = 200 + Math.random() * 50;    	
    },
    draw: function(stage){
    	stage.ctx2.save();
    	stage.ctx2.globalAlpha = 0.6;
    	stage.ctx2.beginPath();
		stage.ctx2.moveTo(this.x, stage.height);
		stage.ctx2.lineTo(this.x, stage.height - this.h);
		stage.ctx2.lineWidth = 10;
		stage.ctx2.lineCap = "round";
		stage.ctx2.strokeStyle = "#3b154e";
		stage.ctx2.stroke();
		stage.ctx2.restore();
    }
});