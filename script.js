let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning = false;
let interval;

const displayHours = document.querySelector('#hours');
const displayMinutes = document.querySelector('#minutes');
const displaySeconds = document.querySelector('#seconds');
const btnStart = document.querySelector('#btn-start');
const btnPause = document.querySelector('#btn-pause');
const btnReset = document.querySelector('#btn-reset');

const startTimer = () => {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            displaySeconds.innerText = seconds < 10 ? '0' + seconds : seconds;
            displayMinutes.innerText = minutes < 10 ? '0' + minutes : minutes;
            displayHours.innerText = hours < 10 ? '0' + hours : hours;
        }, 1000);
    }
};

btnStart.addEventListener('click', startTimer);

const stopWatch = () => {
    if (isRunning) {
        isRunning = false;
        clearInterval(interval);
    }
};

btnPause.addEventListener('click', stopWatch);

const resetWatch = () => {
    isRunning = false;
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    displaySeconds.innerText = '00';
    displayMinutes.innerText = '00';
    displayHours.innerText = '00';
};

btnReset.addEventListener('click', resetWatch);

const btnLap = document.querySelector('#btn-lap');
const laps = document.querySelector('#laps');
const btnClearLaps = document.querySelector('#btn-clearLaps');

const addLap = () => {
    if(isRunning){
        let lap = document.createElement('li');
        lap.innerHTML = `
        ${hours < 10 ? '0' + hours : hours }:
        ${minutes < 10 ? '0' + minutes : minutes}:
        ${seconds < 10 ? '0' + seconds : seconds - 1}`;
        laps.appendChild(lap);
        let deleteLapBtn = document.createElement('span'); 
        deleteLapBtn.innerHTML = "\u00d7"; 
        lap.appendChild(deleteLapBtn);
        btnClearLaps.style.display = "flex";       
        }
}

btnLap.addEventListener('click', addLap);

laps.addEventListener('click', function(e) {
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
});

btnClearLaps.addEventListener("click", () => {
    laps.innerHTML = '';
    btnClearLaps.style.display = "none";
})

