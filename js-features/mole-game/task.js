'use strict'
let countWin = 0;
let countLoss = 0;

function reset() {
    countWin = 0;
    countLoss = 0;
}
let hole = document.querySelectorAll('.hole');
hole.forEach(function(hole) {
    hole.onclick = function() {
        if (hole.classList.contains('hole_has-mole')) {
            countWin += 1;
            if (countWin === 10) {
                alert('выигрыш');
                reset();
            }
        } else {
            countLoss += 1;
            if (countLoss === 5) {
                alert('поражение')
                reset();
            }
        }
        document.getElementById('dead').textContent = countWin;
        document.getElementById('lost').textContent = countLoss;
    };
});

