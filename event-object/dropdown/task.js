'use strict'
let dropdownValue = document.querySelector('.dropdown__value');
let dropdownList = document.querySelector('.dropdown__list');
let dropdownLink = document.querySelectorAll('.dropdown__link');
dropdownLink.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        if (dropdownValue.textContent !== event.target.textContent) {
            dropdownValue.textContent = event.target.textContent;
        }
        dropdownList.classList.remove('dropdown__list_active');
    })
})
dropdownValue.addEventListener('click', function() {
    dropdownList.classList.toggle('dropdown__list_active');
})