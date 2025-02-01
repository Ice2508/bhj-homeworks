'use strict'
let tab = Array.from(document.querySelectorAll('.tab'));
let tab_content = Array.from(document.querySelectorAll('.tab__content'));
tab.forEach((item) => {
    item.addEventListener('click', function() {
        tab.forEach(el => el.classList.remove('tab_active'));
        item.classList.add('tab_active');
        tab_content.forEach(el => el.classList.remove('tab__content_active'));
        let i = tab.indexOf(item);
        tab_content[i].classList.add('tab__content_active');
    })
})

