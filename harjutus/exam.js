let degree = 0; let turns = 0;
let music = new Audio();
music.src = "tilkumine.mp3";

window.onload = function() {
    document.addEventListener("click", cube_spin);
}

function cube_spin() {
    document.removeEventListener("click", cube_spin);
    document.getElementById("main-content").addEventListener("click", change_bg);
    let cube = document.getElementById("cube");
    if(degree == 360){
        degree = 0;
        music.play();
    }

    if(degree % 90 == 0){
        turns++;
        document.getElementById("front").innerHTML = "Veerandpöördeid: <br>" + turns;
        document.getElementById("back").innerHTML = "Veerandpöördeid: <br>" + turns;
        document.getElementById("left").innerHTML = "Veerandpöördeid: <br>" + turns;
        document.getElementById("right").innerHTML = "Veerandpöördeid: <br>" + turns;
    }

    cube.style.transform = "rotateY(" + degree + "deg)";
    degree = degree + 1;
    requestAnimationFrame(cube_spin);
}

function change_bg(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("main-content").style.backgroundColor = "#" + randomColor;
}