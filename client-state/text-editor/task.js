'use strict'
const editor = document.getElementById('editor');
const btn = document.querySelector('button');
editor.addEventListener('change', () => {
    localStorage.setItem('text', editor.value);
})
const editorText = localStorage.getItem('text');
editor.value = editorText;
btn.addEventListener('click', (event) => {
    event.preventDefault();
    editor.value = '';
    localStorage.clear();
})
