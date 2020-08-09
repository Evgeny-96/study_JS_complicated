document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');

    const sel = (elem) => {
        elem.addEventListener('change', () => {
            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.open('GET', './cars.json');
                request.setRequestHeader('Content-type', 'application/json');
                request.send();
                request.addEventListener('readystatechange', () => {
                    if (request.readyState === 4 && request.status === 200) {
                        const data = JSON.parse(request.responseText);
                        data.cars.forEach(item => {
                            if (item.brand === elem.value) {
                                const {
                                    brand,
                                    model,
                                    price
                                } = item;
                                output.innerHTML = `Тачка ${brand} ${model} <br>
                            Цена: ${price}$`;
                            }
                        });
                    } else {
                        output.innerHTML = 'Произошла ошибка';
                    }
                });
            });
        });
    };
    
    sel(select);
    // Promise(sel(select));
        // .then(sel(select))
        // .catch(error => console.error(error));


});