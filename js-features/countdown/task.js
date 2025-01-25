'use script'
let timerStart = document.getElementById('timer');
if (timerStart.textContent.length < 4) {
    let clear = setInterval(() => {
        timerStart.textContent--;
        if (+timerStart.textContent === 0) {
            clearInterval(clear);
            alert('вы победили');
        }
    }, 1000);
} else {
    let time = timerStart.textContent;
    let second = +time.slice(-2);
    let minutes = +time.slice(3, -3);
    let hours = +time.slice(0, 2);
    let clearClock = setInterval(() => {
        second--;
        if (second < 0) {
            second = 59;
            minutes--;
        }
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
        if (hours === 0 && minutes === 0 && second === 0) {
            clearInterval(clearClock);
            window.location.href = 'https://fex.net/ru/s/smesdop';
            return;
        }
        timerStart.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(second).padStart(2, '0')}`;
    }, 1000);
}