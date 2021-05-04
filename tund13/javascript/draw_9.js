let canvas;
let ctx;

function init_draw(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    draw_rect();
    draw_circle();
    draw_line();
    draw_pacman();
}

function draw_pacman(){
    ctx.strokeStyle = "lightyellow";
    ctx.fillStyle = "lightyellow";
    ctx.beginPath();
        ctx.arc(800, 110, 100, .1 * Math.PI, 1.9 * Math.PI);
        ctx.lineTo(800,110);
        ctx.fill();
    ctx.closePath();
}

function draw_line(){
    ctx.strokeStyle = "blue";
    ctx.beginPath();
        ctx.moveTo(200,0);
        ctx.lineTo(200,180);
        //quadratic kontrollpunkti x, kontrollpunkti y, x, y
        ctx.quadraticCurveTo(480, 270, 200, 360);
        //bezier kontrollpunkti x, kontrollpunkti y, 2 kontrollpunkti x, 2 kontrollpunkti y, x, y
        ctx.bezierCurveTo(400, 400, 0, 450, 200, 540);
        ctx.stroke();
    ctx.closePath();
}

function draw_circle(){
    ctx.strokeStyle = "red";
    ctx.lineWidth = 6;
    ctx.fillStyle = "red";
    ctx.beginPath();
    //kaar arc    w,y,r,algusnurk,lopunurk
        ctx.arc(canvas.width / 2, canvas.height / 2, 20, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}


function draw_rect(){
    ctx.strokeStyle = "red";
    ctx.lineWidth = 6;
    ctx.fillStyle = "pink";

    //x,y,x,h
    ctx.beginPath();
        ctx.rect((canvas.width - 200) / 2, (canvas.height - 100) / 2, 200, 100);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "lightblue";
    ctx.beginPath();
        ctx.rect((canvas.width - 200) / 2 + 206, (canvas.height - 100) / 2, 200, 100);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.strokeStyle = "green"
    ctx.strokeRect((canvas.width - 200) / 2, (canvas.height - 100) / 2 - 106, 200, 100);
    ctx.fillStyle = "lightgreen";
    ctx.fillRect((canvas.width - 200) / 2, (canvas.height - 100) / 2 + 106, 200, 100);
}