let updateTimerDisplay = (minutes, seconds) => {
    const minute = minutes.toString().padStart(2, '0');
    const second = seconds.toString().padStart(2, '0');
    const time = document.getElementById('time-left');
    time.textContent = `${minute + ":" + second}`;
}
let times;
let Running = false;
let startTimer = (duration) => {
    minutes = Math.floor(duration/60);
    seconds = duration - minutes  * 60;
    if(Running === false){
        Running = true;
        times = setInterval(updateTimer, 1000);
    }
}

let updateTimer = () => {
    if(minutes === 0 && seconds === 0){
        clearInterval(times);
        Running = false;
        return;
    }
    if(seconds === 0){
        minutes--;
        seconds = 59;  
    } else{
        seconds--;
    }
    updateTimerDisplay(minutes, seconds);
}
let duration = 500;
startTimer(duration);