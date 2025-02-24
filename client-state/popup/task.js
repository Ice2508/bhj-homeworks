'use strict'
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
if (!localStorage.getItem('key')) {
    document.addEventListener('DOMContentLoaded', () => {
        modal.classList.add('modal_active');
    });
}
modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    localStorage.setItem('key', 'true');
})
	

