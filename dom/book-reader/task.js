'use strict'
let book = document.querySelector('.book');
let bookControl = document.querySelectorAll('.book__control');
bookControl = Array.from(bookControl);
bookControl.forEach(el => {
    let a = el.querySelectorAll('a');
    for (let i = 0; i < a.length; i++) {
        a[i].addEventListener('click', (e) => {
            e.preventDefault();
            for (let j = 0; j < a.length; j++) {
                a[j].classList.remove('color_active', 'font-size_active');
            }
            if (a[i].classList.contains('color')) {
                a[i].classList.add('color_active');
            }
            if (a[i].classList.contains('font-size')) {
                a[i].classList.add('font-size_active');
            }
            if (a[i].hasAttribute('data-text-color')) {
                let colorText = a[i].dataset.textColor;
                book.style.color = colorText;
            }
            if (a[i].hasAttribute('data-bg-color')) {
                let bgText = a[i].dataset.bgColor;
                book.style.background = bgText;
            }
            if (a[i].classList.contains('font-size')) {
                let sizeText = a[i].dataset.size;
                sizeText = 'font-size_' + sizeText;
                book.classList.remove('font-size_big', 'font-size_small');
                if (sizeText) {
                    book.classList.add(sizeText);
                }
            }
        });
    }
});
	

