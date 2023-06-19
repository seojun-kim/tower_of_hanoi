const timer = document.querySelector('.js-timer');
// const stopBtn = document.querySelector('.js-timer_stopBtn');
// const startBtn = document.querySelector('.js-timer_startBtn');
// const resetBtn = document.querySelector('.js-timer_resetBtn');

let TIME = 0;
let cron;

function startButton() {
    resetButton();
    updateTimer();
    stopButton();
    cron = setInterval(updateTimer, 1000);
    timer.classList.add('start');
    reloadF();
    start = true;
}

function stopButton() {
    clearInterval(cron);
    timer.classList.remove('start');
}

function resetButton() {
    timer.innerText = '00:00';
    stopButton();
    timer.classList.remove('start');
    return (TIME = 0);
}

function updateTimer() {
    const checkMinutes = Math.floor(TIME / 60);
    const seconds = TIME % 60;
    const minutes = checkMinutes % 60;

    timer.innerText = `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds}`;
    TIME++;
    // console.log(TIME - 1);
}