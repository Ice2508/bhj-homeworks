'use strict';
 const inputFile = document.getElementById('file');
 const buttonSend = document.getElementById('send');
 const progress = document.getElementById('progress');

 buttonSend.addEventListener('click', (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.onload = function() {
         if (xhr.status >= 200 && xhr.status <= 299) {
             alert('Файл успешно загружен');
         } 
     };
    const formData = new FormData();
    const file = inputFile.files[0];
    if (file) {
        formData.append('file', file);
        xhr.upload.onprogress = function(event) {
        let percent = event.loaded / event.total;
        progress.value = percent;
        }
    xhr.send(formData);
    }
 });


