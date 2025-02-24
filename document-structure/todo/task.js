'use strict';
const tasksArr = JSON.parse(localStorage.getItem('tasks')) || [];
const tasksList = document.getElementById('tasks__list');
const input = document.getElementById('task__input');
const taskAdd = document.getElementById('tasks__add');

function addRemoveListener(taskDiv) {
    const taskRemove = taskDiv.querySelector('.task__remove');
    taskRemove.addEventListener('click', (event) => {
        event.preventDefault();
        taskDiv.remove();
        const taskText = taskDiv.querySelector('.task__title').textContent;
        const index = tasksArr.indexOf(taskText);
        tasksArr.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasksArr));
    });
}

function createTask() {
    if (input.value.trim() === '') {
        return;
    }
    tasksArr.push(input.value);
    localStorage.setItem('tasks', JSON.stringify(tasksArr));
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.innerHTML = `<div class="task__title">${input.value}</div>
                         <a href="#" class="task__remove">&times;</a>`;
    tasksList.appendChild(taskDiv);
    addRemoveListener(taskDiv); 
    input.value = '';
}

tasksArr.forEach(el => {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.innerHTML = `<div class="task__title">${el}</div>
                         <a href="#" class="task__remove">&times;</a>`;
    tasksList.appendChild(taskDiv);
    addRemoveListener(taskDiv);
});

taskAdd.addEventListener('click', (event) => {
    event.preventDefault();
    createTask();
    input.focus();
});