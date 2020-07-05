"use strict";

let textColor3 = document.querySelector('.text-color-3'),
    textButton = document.querySelector('.text-button'),
    body = document.querySelector('body'),
    rendColor, result;

    function rend() {
        rendColor = Math.random();
        rendColor *= 100000000;
        result = Math.floor(rendColor).toString(16);
        textColor3.textContent = '#' + result;
        body.style.backgroundColor = '#' + result;
        console.log('body.style.backgroundColor: ', body.style);
    }
    textButton.addEventListener('click', rend);
