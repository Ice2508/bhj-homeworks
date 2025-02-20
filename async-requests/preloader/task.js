'use strict'

const img = document.getElementById('loader');
const xhr = new XMLHttpRequest();
const items = document.getElementById('items');
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");

xhr.onload = function () {
	if (xhr.status >= 200 && xhr.status < 300) {
		const exchangeRates = JSON.parse(xhr.responseText);
		for (let currency in exchangeRates.response.Valute) {
			items.insertAdjacentHTML('beforeend',`
				<div class="item">
				<div class="item__code">
                    ${exchangeRates.response.Valute[currency].CharCode}
                </div>
                <div class="item__value">
                    ${exchangeRates.response.Valute[currency].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
                </div>`);
		}

        img.classList.remove('loader_active');
    } else {
          alert('ошибка загрузки');
    }
};

xhr.send();