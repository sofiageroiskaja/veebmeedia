let message = "Töötab!";
let picUrl = "../../../~rinde/media/photos/TLU_600x400/";
let picNamePrefix = "tlu_";
let picExt = ".jpg";
let minPicNum = 1;
let maxPicNum = 43;
let picNum = 1;
let picChange = 0;

window.onload = function() {
    // alert(message);
    console.log("Sõnum on: " + message);
    putOpenTime();
    putRandomPic();
    clockTick();
    setButtons();
}

function putOpenTime() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    document.getElementById("open_message").innerHTML = "Leht avati kell " + currentHour + ":" + currentMinutes + ":" + currentSeconds + ".";
}

function putRandomPic() {
    let randomNum = minPicNum + Math.round(Math.random() * (maxPicNum - minPicNum));
    picNum = randomNum;
    putPhoto();
}

function putPhoto() {
    document.getElementById("nextphoto").disabled = true;
    document.getElementById("prevphoto").disabled = true;
    if (picChange % 2 == 0) {
        document.getElementById("tlu_pic2").src = picUrl + picNamePrefix + picNum + picExt;
        document.getElementById("tlu_pic2").style.opacity = 1; 
    } else {
        document.getElementById("tlu_pic").src = picUrl + picNamePrefix + picNum + picExt;
        document.getElementById("tlu_pic2").style.opacity = 0;
    }
    picChange ++;
}

function clockTick() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    let secAngle = currentSeconds * 6;
    document.getElementById("secondhand").style.transform = "rotate(" + secAngle +"deg)";
}

function setButtons(){
    document.getElementById("nextphoto").addEventListener("click", nextPhoto);
    document.getElementById("prevphoto").addEventListener("click", prevPhoto);
    document.getElementById("tlu_pic2").addEventListener("transitionend", enableButtons);
    document.getElementById("animBtn").addEventListener("click", toggleAnim);
    document.getElementById("stage").addEventListener("animationstart", animInfo);
    document.getElementById("stage").addEventListener("animationend", animInfo);
    document.getElementById("stage").addEventListener("animationiteration", animInfo);
    document.getElementById("myanim").addEventListener("animationstart", animStart);
    document.getElementById("myanim").addEventListener("animationiteration", animRepeat);
    document.getElementById("myanim").addEventListener("animationend", animEnd);
}

function animInfo(e){
    console.log(e);
}

function toggleAnim() {
    let allItems = document.getElementById("stage").getElementsByTagName("*");
    if (document.getElementById("animBtn").innerHTML == "Käivita animatsioon") {
        document.getElementById("animBtn").innerHTML = "Peata animatsioon";
        for (let i = 0; i < allItems.length; i++) {
            allItems[i].style.animationPlayState = "running";
        }
    } else {
        document.getElementById("animBtn").innerHTML = "Käivita animatsioon"
        for (let i = 0; i < allItems.length; i++) {
            allItems[i].style.animationPlayState = "paused";
        }
    }
}

function enableButtons(){
    document.getElementById("nextphoto").disabled = false;
    document.getElementById("prevphoto").disabled = false;
}

function nextPhoto() {
    picNum ++;
    if (picNum > maxPicNum) {
        picNum = minPicNum;
    }
    putPhoto();
}

function prevPhoto() {
    picNum --;
    if (picNum < minPicNum) {
        picNum = maxPicNum;
    }
    putPhoto();
}

function myAnim() {
    document.getElementById("myanim").style.animation = "myanimation 4s 2";     
}

function animStart() {
    console.log("started");
}
  
function animRepeat() {
    console.log("repeat");
}
  
function animEnd() {
    console.log("completed");
}
