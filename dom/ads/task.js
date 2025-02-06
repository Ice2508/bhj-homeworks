
















'use strict'
let rotatorList = document.querySelectorAll('.rotator__case');

function rotate(rotator) {
    let index = 0;

    function updateRotator() {
        let color = rotator[index].dataset.color;
        rotator[index].style.color = color;
        let speed = rotator[index].dataset.speed;
        if (index === 0 && rotator[rotator.length - 1].classList.contains('rotator__case_active')) {
            rotator[rotator.length - 1].classList.remove('rotator__case_active');
        }
        if (index > 0) {
            rotator[index - 1].classList.remove('rotator__case_active');
        }
        rotator[index].classList.add('rotator__case_active');
        index++;
        if (index === rotator.length) {
            index = 0;
        }
        setTimeout(updateRotator, speed);
    }
    updateRotator();
}
rotate(rotatorList);