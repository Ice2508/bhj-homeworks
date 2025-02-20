'use strict';
const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.querySelector('.poll__answers');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close');
let percentageResults = [];

function loadPollData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.responseText);
            pollTitle.textContent = response.data.title;
            for (let i = 0; i < response.data.answers.length; i++) {
                pollAnswers.insertAdjacentHTML('beforeend', `
            <button class="poll__answer">
              ${response.data.answers[i]}
            </button>
        `);
            }
            const pollAnswer = document.querySelectorAll('.poll__answer');
            pollAnswer.forEach((btn, i) => {
                btn.addEventListener('click', () => {
                    const id = response.id;
                    const answerIndex = i;
                    overlay.style.display = 'block';
                    const xhrVote = new XMLHttpRequest();
                    xhrVote.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
                    xhrVote.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                    xhrVote.onload = function() {
                        if (xhrVote.status >= 200 && xhrVote.status < 300) {
                            const responseVote = JSON.parse(xhrVote.responseText);
                            const results = responseVote.stat;
                            let votesSum = 0;
                            for (let i = 0; i < results.length; i++) {
                                votesSum += results[i].votes;
                            }
                            percentageResults = results.map(item => {
                                const percentage = (item.votes / votesSum) * 100;
                                return {
                                    answer: item.answer,
                                    percentage: percentage.toFixed(2)
                                };
                            });
                        }
                    }
                    xhrVote.send(`vote=${id}&answer=${answerIndex}`);
                })
            })
        } else {
            alert(`Ошибка: ${xhr.status}`);
        }
    };
    xhr.send();
}

loadPollData();

function updatePollResults() {
    pollAnswers.innerHTML = ''; 
    percentageResults.forEach(result => {
        pollAnswers.insertAdjacentHTML('beforeend', `
            <div class="poll__result">
                ${result.answer}: <b>${result.percentage}%</b>
            </div>
        `);
    });
}

close.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.style.display = 'none';
    updatePollResults(); 
});
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.style.display = 'none';
        pollAnswers.innerHTML = '';
        updatePollResults(); 
    }
});


