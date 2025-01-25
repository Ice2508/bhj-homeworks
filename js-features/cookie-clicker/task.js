'use strict'
let clicerCounterEl = document.getElementById('clicker__counter');
let clicerCounter = +(document.getElementById('clicker__counter').textContent);
let cookie = document.getElementById('cookie');
let startTime = new Date();
const defaultWidth = 200;
const enlargedWidth = 210;
cookie.onclick = function() {
    clicerCounter++;
    clicerCounterEl.textContent = clicerCounter;
    if (cookie.width === defaultWidth) {
        cookie.width = enlargedWidth;
    } else {
        cookie.width = defaultWidth;
    }
    const currentTime = new Date();
    const timeDiffInSeconds = (currentTime - startTime) / 1000;
    const clickerSpeed = (1 / timeDiffInSeconds).toFixed(2);
    console.log(timeDiffInSeconds);
    document.getElementById('clicker__speed').textContent = clickerSpeed;
    startTime = currentTime;
}
