var bubble_canvas = document.getElementById( "mycanvas" );
var bubble_ctx = bubble_canvas.getContext( '2d' );

function Bubble(x, y, dx, dy, radius){

	this.x 	= x; this.y = y;
	this.dx = dx; this.dy = dy;
    this.radius = radius;

	this.draw = function(){
		bubble_ctx.beginPath();
		bubble_ctx.arc(this.x, this.y,  this.radius, 0, Math.PI * 2, false);
		bubble_ctx.strokeStyle = "lightblue";	
		bubble_ctx.stroke();
	}

	this.update = function() {

		if(this.x + this.radius > 600 || this.x - this.radius < 0){
			this.dx = -this.dx;
		}

		if(this.y + this.radius > 200 || this.y - this.radius < 0){
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	}
}

var Bubbles = [];
var radius = 20;

for( var i = 0; i < 10; i++ )  {
	
	var x = Math.random() * (600 - radius * 2) + radius;
	var y = Math.random() * (200 - radius * 2) + radius;

  	var dx = (Math.random() - 0.5) * 2;
  	var dy = (Math.random() - 0.5) * 2;

	Bubbles.push(new Bubble(x, y, dx, dy, radius));
}

function animate_bubbles() {
  
	requestAnimationFrame(animate_bubbles);
	bubble_ctx.clearRect(0, 0, 610, 210);

	for(var r = 0; r < 7; r++) {
		Bubbles[r].update();
	}
}
animate_bubbles();
