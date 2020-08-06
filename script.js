document.addEventListener('DOMContentLoaded', () => {
    "use strict";    
    const container = document.querySelector('.container'),
        select = document.getElementById('cards');
        const cloneBlock = (elem) => {
            let div = document.createElement('div');
            div.classList.add('card');
            div.insertAdjacentHTML( 'beforeend', 
            `<img class="card__img" src="#" alt="">
                <div class="card__p">
                    <div class="p-column">имя: <span class="nameHeroes">nameHeroes</span><br></div>
                    <div class="p-column">направление: <span class="species">species</span><br></div>
                    <div class="p-column">год рождения: <span class="birthDay">birthDay</span><br></div>
                    <div class="p-column">год смерти: <span class="deathDay">deathDay</span><br></div>
                    <div class="p-column">статус: <span class="gestatusder">gestatusder</span><br></div>
                    <div class="p-column">актер: <span class="actors">actors</span><br></div>
                    <div class="p-column">фильмы: <span class="movies">movies</span><br></div>
                </div>
            `);
            container.append(div);            
        };

        const request = new XMLHttpRequest();

        request.open('GET', './dbHeroes.json');
        request.setRequestHeader('Content-type', 'application/json');

        request.send();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
              
                data.forEach((elem) => {  
                    cloneBlock(elem); 
                });
                const card = document.querySelectorAll('.card');

                card.forEach((elem, i) => {
                    const nameHeroes = elem.querySelector('.nameHeroes');
                    const species = elem.querySelector('.species'),
                    birthDay = elem.querySelector('.birthDay'),
                    deathDay = elem.querySelector('.deathDay'),
                    gestatusder = elem.querySelector('.gestatusder'),
                    actors = elem.querySelector('.actors'),
                    movies = elem.querySelector('.movies'),
                    img = elem.querySelector('.card__img');

                    nameHeroes.textContent = data[i].name;
                    species.textContent = data[i].species;
                    birthDay.textContent = data[i].birthDay;
                    deathDay.textContent = data[i].deathDay;
                    gestatusder.textContent = data[i].gestatusder;
                    actors.textContent = data[i].actors;
                    movies.textContent = data[i].movies;
                    img.src = data[i].photo;
                    
                });

                select.addEventListener('change', () => {
                    [...data].forEach((elem, i) => {
                        if (card[i].classList.contains('active') || card[i].classList.contains('no-active')) {
                            card[i].classList.remove('active');
                            card[i].classList.remove('no-active');
                        }
                        if(select.value === 'all') {
                            card[i].classList.add('active');
                        } else if(elem.movies) {
                            elem.movies.forEach(e => { 
                                if (select.value === e) {
                                    card[i].classList.add('active');
                                } 
                            });
                        }
                    });
                });
               

            }
            
        });

});