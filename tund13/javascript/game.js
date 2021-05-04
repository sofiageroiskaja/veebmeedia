let canvas;
let ctx;
let ball_list = [];
let elements_limit = 10;
let game_alphabet = [];
let hit_count = 0;
let miss_count = 0;
let start_audio = document.getElementById("gamestart"); 
let reward_audio = document.getElementById("reward"); 
let win_audio = document.getElementById("gamewin");
var timer; 
var timeLeft = 60; 


window.onload = function(){
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
}

function init_game(){
	start_audio.play();
	document.getElementById("score").innerHTML = "Score: " + hit_count;
	timer = setInterval(updateTimer, 1000);
	updateTimer();
	add_elements();
	canvas.addEventListener("mousedown", check_hits);
	const button = document.querySelector('button');
	button.disabled = true;
}

function reset_game(){
	start_audio.play();
	hit_count = 0;
	document.getElementById("score").innerHTML = "Score: " + hit_count;
	ball_list = [];
	add_elements();
	updateTimer();
	canvas.addEventListener("mousedown", check_hits);
}

function add_elements(){
	let base_alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "Š", "Z", "Ž", "T", "U", "V", "W", "Õ", "Ä", "Ö", "Ü", "X", "Y"];
	//loosime soovitud arvu tähti
	game_alphabet = base_alphabet.slice(0);
	while(game_alphabet.length > elements_limit){
		let one_to_remove = Math.round(Math.random() * (game_alphabet.length - 1));
		game_alphabet.splice(one_to_remove, 1);
	}
	let x = canvas.width / 2;
	let y = canvas.height / 2;
	for(let i = 0; i < elements_limit; i ++){
		let r = 20 + Math.round(Math.random() * 15);
		let symbol = game_alphabet[game_alphabet.length - 1 - i];
		ball_list.push(new Game_ball(x,y,r,symbol));
	}
	move_elements();
}

function move_elements(){
	canvas.width = canvas.width;
	for(let i = 0; i < ball_list.length; i ++){
		ball_list[i].move_self();
		ball_list[i].draw_self();
	}
	if(ball_list.length > 0){
		requestAnimationFrame(move_elements);
	}
}

function check_hits(e){
	let m_x = e.clientX - canvas.offsetLeft + window.scrollX;
	let m_y = e.clientY - canvas.offsetTop + window.scrollY;
	for(let i = 0; i < ball_list.length; i ++){
		if(ball_list[i].was_hit(m_x, m_y)){
			if(ball_list[i].symbol == game_alphabet[hit_count]){
				//eemaldan selle elemendi
				ball_list.splice(i, 1);
				hit_count ++;
				reward_audio.play();
				document.getElementById("score").innerHTML = "Score: " + hit_count;
				if(hit_count == 10){
					document.getElementById("score").innerHTML = "You won! Good job!";
					win_audio.play();
				}else{
					clearTimeout(tick);
				}
				break;
			}
		}
	}
}

function pythagoras(b_x, b_y, m_x, m_y){
	return Math.sqrt(Math.pow(b_x - m_x, 2) + Math.pow(b_y - m_y,2));
}

class Game_ball{
	constructor(x,y,r,symbol){
		this.x = x;
		this.y = y; 
		this.r = r;
		this.symbol = symbol;
		this.speed_x = 0;
		this.speed_y = 0;
		this.set_speed();
		this.draw_self();
	}
	
	draw_self(){
		ctx.fillStyle = Math.floor(Math.random()*16777215).toString(16);
		ctx.beginPath();
			ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
			ctx.fill();
		ctx.closePath();
		//lisame tähe
		ctx.fillStyle = "#FFFFFF";
		ctx.font = "bold " + Math.round(this.r * 1.4) + "px Verdana";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillText(this.symbol, this.x, this.y);
	}
	
	set_speed(){
		while(this.speed_x == 0 && this.speed_y == 0){
			//random kiirused
			this.speed_x = 3 - Math.round(Math.random()* 5);
			this.speed_y = 3 - Math.round(Math.random()* 5);
		}
	}

	move_self(){
		//pole servale jõudnud
		if(this.x <= this.r || this.x >= canvas.width - this.r){
			this.speed_x *= -1;
		}
		if(this.y <= this.r || this.y >= canvas.height - this.r){
			this.speed_y *= -1;
		}
		this.x += this.speed_x;
		this.y += this.speed_y;
	}
	
	was_hit(m_x, m_y){
		return pythagoras(this.x, this.y, m_x, m_y) <= this.r
	}
}

function move_1(){
	canvas.width = canvas.width;
	ctx.fillStyle = "#FFCC00";
	x += speed_x;
	y += speed_y;
	//pole servale jõudnud
	if(x <= r || x >= canvas.width - r){
		speed_x *= -1;
	}
	if(y <= r || y >= canvas.height - r){
		speed_y *= -1;
	}
	ctx.beginPath();
		ctx.arc(x, y, r, 0, 2 * Math.PI);
		ctx.fill();
	ctx.closePath();
	requestAnimationFrame(move_1);
}

function updateTimer() {
  timeLeft = timeLeft - 1;
  if(timeLeft >= 0 && hit_count < 10){
  var timer = document.getElementById("time");
  timer.innerHTML = timeLeft;
  }
}
