let sound_url = "http://greeny.cs.tlu.ee/~rinde/media/sounds/kellaheli/";
let clock_speaker = new Audio();
let time_words = [];
let bell = new Audio();
let prev_hour;

function initClock(){
    document.getElementById("clock_speak_btn").addEventListener("click", tell_time);
    bell.src = sound_url + "kell.mp3";
    prev_hour = new Date().getHours();
    clockTick();
}

function clockTick() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    let secAngle = currentSeconds * 6;
    document.getElementById("secondhand").style.transform = "rotate(" + secAngle +"deg)";
    //kas lüüa kella
    //kavalam on kontrollida, kas document.getElementById("allow_bell_button").checked ja tundide arv erineb eelmise tsükli tundidest
    // if(currentminute == 0 && currentsecond == 0 && currenttime.getmiliseconds() < 1000/60 && document.getElementById("allow_bell_button").checked){
        //loendur, mitu korda vaja lüüa
    //}
}

function tell_time(){
    time_words.push("kellon");
    let currentTime = new Date();
    num_to_words(currentTime.getHours());
    time_words.push("ja");
    num_to_words(currentTime.getMinutes());
    if(currentTime.getMinutes() == 1){
        time_words.push("minut");
    } else{
        time_words.push("minutit");
    }
    //console.log(time_words);
    document.getElementById("clock_speak_btn").removeEventListener("click", tell_time);
    document.getElementById("clock_speak_btn").disabled = true;
    clock_speaker.addEventListener("ended", speak_time);
    speak_time();
}

function speak_time(){
    if(time_words.length > 0){
        clock_speaker.src = sound_url + time_words[0] + ".mp3";
        clock_speaker.play();
        time_words.shift();
    } else{
        clock_speaker.addEventListener("ended", speak_time);
    }
}

function num_to_words(num_value){
    if(num_value <= 10){
        time_words.push(num_value);
    } else{
        let tens = Math.floor(num_value / 10);
        let ones = num_value % 10;
        if(tens == 1){
            time_words.push(ones);
            time_words.push("teist");
        } else{
            time_words.push(tens);
            time_words.push("kümmend");
            if(ones > 0){
                time_words.push(ones);
            }
        }
    }
}