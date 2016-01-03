var Fruit = new Class({
    initialize: function(x, y){
        this.num = 0;
        this.alive = false;	
		this.x = x;
        this.y = y;		
        this.l = 0;
        this.spd = Math.random() * 0.02 + 0.005;
		this.img = new Image();
		this.img.src = "img/fruit.png";		
    },
    draw: function(stage){ 
    	if(this.alive){
    		if(this.l < 15){
    			this.l += 0.001 * stage.deltaTime;
    		}else{
    			this.y -= this.spd * 6 * stage.deltaTime;
    		}
    		stage.ctx2.drawImage(this.img, this.x - this.l * 0.5, this.y - this.l * 0.5, this.l, this.l);
    		if (this.y <= 10) {				
				this.alive = false;
			}
    	}
    	
    },
    born: function(){

    }
});