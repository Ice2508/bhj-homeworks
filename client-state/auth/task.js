'use strict'
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const signin = document.getElementById('signin');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close');
const control = document.querySelectorAll('.control');
const text = document.querySelector('.text');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (form.checkValidity()) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
        xhr.responseType = 'json';
        xhr.onload = function() {
            const response = xhr.response;
            if (response.success) {
                localStorage.setItem('key', response.user_id);
                welcome.classList.add('welcome_active');
                userId.textContent = response.user_id;
                signin.classList.remove('signin_active');
            } else {
                overlay.classList.add('overlay_active');
                text.textContent = 'Неверный логин/пароль';
            }
        }
        const formData = new FormData(form);
        xhr.send(formData);
    } else {
        overlay.classList.add('overlay_active');
        text.textContent = 'Введите логин/пароль';
    }
})
close.onclick = () => {
    overlay.classList.remove('overlay_active');
    form.reset();
}
if (localStorage.getItem('key')) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userId.textContent = localStorage.getItem('key');
}