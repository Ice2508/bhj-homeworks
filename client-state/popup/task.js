'use strict'
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

function getCookie(name) {
    return document.cookie
        .split('; ') 
        .find(row => row.startsWith(name + '='))
        ?.split('=')[1]; 
}

if (!getCookie('modalClosed')) {
    document.addEventListener('DOMContentLoaded', () => {
        modal.classList.add('modal_active');
    });
}
modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = "modalClosed=true; path=/; expires=Fri, 31 Dec 2026 23:59:59 GMT";
})
	

