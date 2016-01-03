;(function(){

	var Stage = new Class({
	    initialize: function(){
	        this.can1 = document.getElementById('canvas1');	//fishes,dust,ui,circle
	    	this.ctx1 = this.can1.getContext('2d');
	   		this.can2 = document.getElementById('canvas2');	//background,fruits
	    	this.ctx2 = this.can2.getContext('2d');
	    	this.width = this.can1.width;
	    	this.height = this.can1.height;
	    	this.bgPic = new Image();
	    	this.bgPic.src = "img/background.jpg";
	    	this.deltaTime = 0;		
	    }
	});

	var Game = this.Game = (function(){				       	
	    
	    var stage = new Stage();
	   
	    var drawBackground = function() {	    	
	    	stage.ctx2.drawImage(stage.bgPic,0,0,stage.width,stage.height);
        };

        var anes = [];
        for (var i = 0; i < 50; i++) {
        	anes.push(new Anemone(i));
        }

        var drawAnemone = function(){
        	for (var i = 0; i < 50; i++) {        		
        		anes[i].draw(stage);        		
        	}
        };

        var fruits = [];
        var bornFruit = function(){

        };

        for (var i = 0; i < 30; i++) {
        	var n = Math.floor(Math.random() * 50);
        	var ane = anes[n];            		
        	var f = new Fruit(ane.x, stage.height - ane.h);
        	fruits.push(f);
        }        	

        var drawFruit = function(){
        	var num = 0;       	  	
        	for (var i = 0; i < 30; i++) {
        		if(fruits[i].alive){        			
        			num += 1;
        		}        		
        	}
        	if(num < 15){
        		for (var i = 0; i < 30; i++) {
        			if(!fruits[i].alive){
        				var n = Math.floor(Math.random() * 50);
        				var ane = anes[n];   
        				fruits[i].x = ane.x;
        				fruits[i].y = stage.height - ane.h;         		
        				fruits[i].alive = true;
        				num += 1;
        			}
        		}
        	} 
        	for (var i = 0; i < 30; i++) {
        		if(fruits[i].alive){
        			fruits[i].draw(stage);        			        			
        		}        		
        	}       	
        };

        var lastTime = Date.now();

		var process = function(){
			var now = Date.now();
			stage.deltaTime = now - lastTime;
			lastTime = now;	
		};

		var update = function(){};

		var display = function(){			
			drawBackground();
			drawAnemone();
			drawFruit();
		};

		return new Class({
			initialize: function(){
				this.xyz = "aa";
			},
			aa: function(){},
			run: function(){						
			    process();
			    update();
			    display();			
		    }
        });	
	})();

})();