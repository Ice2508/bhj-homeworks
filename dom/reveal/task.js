'use strict';
let revealEl = document.querySelectorAll('.reveal');

function start() {
    revealEl.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            el.classList.add('reveal_active');
        }
    })
}
start();
window.addEventListener('scroll', start);