let sound_url = "http://greeny.cs.tlu.ee/~rinde/media/sounds/kellaheli/";
let clock_speaker = new Audio();
let time_words = [];
let bell = new Audio();

function initClock() {
    document.getElementById("clock_speak_btn").addEventListener("click", tellTime);
    bell.src = sound_url + "kell.mp3";
    clockTick();
}

function clockTick() {
    let current_time = new Date();
    let current_hour = current_time.getHours();
    let current_minutes = current_time.getMinutes();
    let current_seconds = current_time.getSeconds();
    let sec_angle = current_seconds * 6;
    let min_angle = current_minutes * 6 + (sec_angle / 60);
    let hour_angle = current_hour * 30 + (min_angle / 12);
    document.getElementById("secondhand").style.transform = "rotate(" + sec_angle +"deg)";
    document.getElementById("minutehand").style.transform = "rotate(" + min_angle +"deg)";
    document.getElementById("hourhand").style.transform = "rotate(" + hour_angle +"deg)";
    if (current_minutes == 34 && current_seconds == 0 && current_time.getMilliseconds() < 1000 / 60 && document.getElementById("allow_bell_btn").checked) {
        bell.play();
    }
}

function tellTime() {
    time_words.push("kellon");
    let current_time = new Date();
    num_to_words(current_time.getHours());
    time_words.push("ja");
    num_to_words(current_time.getMinutes());
    if (current_time.getMinutes() == 1) {
        time_words.push("minut");
    } else {
        time_words.push("minutit");
    }
    // console.log(time_words);
    document.getElementById("clock_speak_btn").removeEventListener("click", tellTime);
    document.getElementById("clock_speak_btn").disabled = true;
    clock_speaker.addEventListener("ended", speakTime);
    speakTime();
}

function speakTime() {
    if (time_words.length > 0) {
        clock_speaker.src = sound_url + time_words[0] + ".mp3";
        clock_speaker.play();
        time_words.shift();
    } else {
        clock_speaker.removeEventListener("ended", speakTime);
        document.getElementById("clock_speak_btn").disabled = false;
        document.getElementById("clock_speak_btn").addEventListener("click", tellTime);
    }
}

function num_to_words(num_value) {
    if (num_value <= 10) {
        time_words.push(num_value);
    } else {
        let tens = Math.floor(num_value / 10);
        let ones = num_value % 10;
        if (tens == 1) {
            time_words.push(ones);
            time_words.push("teist");
        } else {
            time_words.push(tens);
            time_words.push("kymmend");
            if (ones > 0) {
                time_words.push(ones);
            }
        }
    }
}