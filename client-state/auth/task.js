'use strict'
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const signin = document.getElementById('signin');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close');
const control = document.querySelectorAll('.control');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isFormValid = true;
    control.forEach(el => {
        if (el.value.trim() === '') {
            isFormValid = false;
        }
    });
    if (isFormValid) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status <= 299) {
                const response = JSON.parse(xhr.responseText);
                if (response.success) {
                    localStorage.setItem('key', response.user_id);
                    welcome.classList.add('welcome_active');
                    userId.textContent = response.user_id;
                    signin.classList.remove('signin_active');
                } else {
                    overlay.classList.add('overlay_active');
                }
            } else {
                console.error('ошибка запроса');
            }
        }
        const formData = new FormData(form);
        xhr.send(formData);
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