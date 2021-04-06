let mycanvas;
let context;

function init_mydraw(){
    mycanvas = document.getElementById("mycanvas");
    context = mycanvas.getContext("2d");

    draw_fish1();
    draw_fish2();
}

function draw_fish1(){
    context.strokeStyle = "black";
    context.beginPath();
        context.lineWidth=3;

        context.moveTo(100, 300);
        context.bezierCurveTo(130, 200, 230, 330, 360, 250);
              
        context.moveTo(100, 300);
        context.bezierCurveTo(130, 380, 230, 300, 360, 365);
              
        context.moveTo(361, 250);
        context.quadraticCurveTo(360, 250, 330, 310);
        context.moveTo(361, 365);
        context.quadraticCurveTo(360, 360, 328, 310);
              
        context.moveTo(130, 285);
        context.arc(130, 285, 6, 0, 2*Math.PI);
        context.moveTo(100, 300);
        context.lineTo(110, 300);
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
