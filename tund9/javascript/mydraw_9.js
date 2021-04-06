let mycanvas;
let context;

function init_mydraw(){
    mycanvas = document.getElementById("mycanvas");
    context = mycanvas.getContext("2d");
    bubbles = [];
    r = 30;

    draw_fish1();
    draw_fish2();
}

function draw_fish1(){
    context.beginPath();
        context.lineWidth=3;

        context.moveTo(100, 150);
        context.bezierCurveTo(120, 70, 240, 160, 360, 90);
              
        context.moveTo(100, 150);
        context.bezierCurveTo(120, 220, 240, 140, 360, 205);
              
        context.moveTo(361, 88);
        context.quadraticCurveTo(360, 120, 320, 150);
        context.moveTo(361, 207);
        context.quadraticCurveTo(350, 155, 320, 150);
              
        context.moveTo(135, 135);
        context.arc(135, 135, 5, 0, 2*Math.PI);
        context.moveTo(100, 150);
        context.lineTo(110, 150);
        context.stroke();
    context.closePath();
}

function draw_fish2(){
    context.beginPath();
        context.lineWidth=3;

        context.moveTo(400, 320);
        context.bezierCurveTo(440, 260, 500, 340, 600, 280);
              
        context.moveTo(400, 320);
        context.bezierCurveTo(410, 390, 510, 310, 590, 380);
              
        context.moveTo(575, 333);
        context.quadraticCurveTo(575, 320, 600, 280);
        context.moveTo(590, 379);
        context.quadraticCurveTo(590, 390, 575, 330);
              
        context.moveTo(430, 314);
        context.arc(430, 314, 5, 0, 2*Math.PI);
        context.moveTo(400, 320);
        context.lineTo(410, 320);
        context.stroke();
    context.closePath();
}