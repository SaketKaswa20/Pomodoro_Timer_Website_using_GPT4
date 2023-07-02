let workTime, breakTime, laps;
let isWorking = true;
let currentLap = 0;

document.getElementById('startButton').addEventListener('click', function() {
    workTime = document.getElementById('workTime').value * 60;
    breakTime = document.getElementById('breakTime').value * 60;
    laps = document.getElementById('laps').value;
    startTimer(workTime);
});

function startTimer(duration) {
    let timer = duration, minutes, seconds;
    let countdown = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById('timer').textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            if (isWorking) {
                if (currentLap++ >= laps) {
                    clearInterval(countdown);
                    return;
                }
                timer = breakTime;
            } else {
                timer = workTime;
            }
            isWorking = !isWorking;
        }
    }, 1000);
}
