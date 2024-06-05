let updateTimerDisplay = (minutes, seconds) => {
    const minute = minutes.toString().padStart(2, '0');
    const second = seconds.toString().padStart(2, '0');
    const time = document.getElementById('time-left');
    time.textContent = `${minute + ":" + second}`;
}
let startTimer = (duration) =>{
    let timer 
}

let duration = 25;
updateTimerDisplay(1, 2);