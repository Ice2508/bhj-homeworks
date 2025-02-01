'use strict'
let arr = ['bob', 'awesome', 'netology', 'hello', 'kitty', 'rock', 'youtube', 'popcorn', 'cinema', 'love', 'javascript'];
let letters = [];
let statusWin = 0;
let statusLoss = 0;
let currentIndex = 0;
let randomWord;
let word = document.querySelector('.word');
let timer = document.querySelector('.timer');
let clearTimer;

function clearCount() {
    statusWin = 0;
    statusLoss = 0;
}

function random() {
    return arr[Math.floor(Math.random() * arr.length)];
}

function reset() {
    currentIndex = 0;
    randomWord = random();
    letters = randomWord.split('');
    word.innerHTML = displayWordWithSpans(randomWord);
    if (clearTimer) {
        clearInterval(clearTimer);
    }
    beginTimer();
}

function displayWordWithSpans(randomWord) {
    return randomWord.split('').map(letter => `<span class="letter">${letter}</span>`).join('');
}

function updateStatus() {
    document.querySelector('.status__wins').textContent = statusWin;
    document.querySelector('.status__loss').textContent = statusLoss;
}

function beginTimer() {
    let timerCount = randomWord.length;
    timer.textContent = timerCount;
    clearTimer = setInterval(() => {
        timer.textContent--
        if (+(timer.textContent) === 0) {
            GameEnd('Время вышло');
        }
    }, 1000)
}

function GameEnd(message) {
    setTimeout(() => {
        alert(message);
        clearCount();
        reset();
        updateStatus();
    }, 50);
}
reset();
document.addEventListener('keydown', (event) => {
    let span = document.querySelectorAll('.letter');
    if (event.key.toLowerCase() === letters[currentIndex]) {
        span[currentIndex].style.color = 'green';
        currentIndex++;
        if (currentIndex == letters.length) {
            statusWin++;
            setTimeout(() => {
                reset();
            }, 200);
        }
        if (statusWin === 10) {
            GameEnd('победа');
        }
    } else {
        statusLoss++;
        if (statusLoss === 5) {
            GameEnd('поражение');
        }
        reset();
    }
    updateStatus();
})
