$(function(){
	//the timer
	function timer(){
    var d =new Date();
    var s =d.toLocaleTimeString();
    document.getElementById("demo").innerHTML=s;
	}
	setInterval(timer,33);

	//canvas init
	var	canvas = $("canvas")[0],
		ctx = canvas.getContext("2d");

	//canvas dimensions
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight*0.8;
	var w = canvas.width;
	var h = canvas.height;

	//flake particles
	var flakes = [];
	var	flakecount = 40;
	for(var i=0; i<flakecount; i++){
		flakes.push({
			x:Math.random()*w,//x-coordinate
			y:Math.random()*h,//y-coordinate
			r:Math.random()*4+1,//radius
			d:Math.random()*flakecount//density
		})		
	}

    //let's draw the flakes
    function drawflakes(){
    	ctx.clearRect(0, 0, w, h);
    	ctx.fillStyle="rgba(255, 255, 255, 0.8)";
    	ctx.beginPath();
    	for(var i=0; i<flakecount; i++){
    		var flake = flakes[i];
    		ctx.moveTo(flake.x, flake.y);
    		ctx.arc(flake.x, flake.y, flake.r, 0, 2*Math.PI, true);
    	}
    	ctx.fill();
    	update();
    }
    
    //move the flakes
    var angle=0;
    function update(){
    	angle += 0.01;
    	for(var i=0; i<flakecount; i++){
    		var flake=flakes[i];
    		flake.y += Math.cos(angle+flake.d)+1+flake.r/2;
    		flake.x += Math.sin(angle)*2;
    		//sending flakes back from the top when it exits
    		if(flake.x > w+5 || flake.x < -5 || flake.y > h){
    			if(i%3>0){
    				flakes[i] = {x:Math.random()*w, y:-10, r:flake.r, d:flake.d};

    			}
    			else{
    				//if the flake is exitting from the right
    				if(Math.sin(angle)>0){
    					flakes[i]={x:-5, y:Math.random()*h, r:flake.r, d:flake.d};
    				}
    				else{
    					flakes[i]={x:w+5, y:Math.random()*h, r:flake.r, d:flake.d};
    				}
    			}
    		}

    	}
    }

    //call the function
    setInterval(drawflakes,33);
});


/*$("#love").click(function(){
    //love particles
    var loves = [];
    var lovecount = 40;
    for(var i=0; i<lovecount; i++){
        loves.push({
            x:Math.random()*w,
            y:Math.random()*h,
            d:Math.random()*lovecount

        })
    }
    //let's draw it
    function drawloves(){
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "red";
        ctx.beginPath();
        for(var i=0; i<lovecount; i++){
            var love =loves[i];
            ctx.moveTo(love.x, love.y);
            ctx.
        }
    }
}); */