"use strict";

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function question() {
    let num = 20;
    let ques = prompt('Угадай число от 1 до 100');
    if (Boolean(ques) === false && ques !== '') {
         alert('Вы закончили игру!');
         return 0;
    }else if (!isNumber(ques)) {
        alert('Введи число!');
        question();
    } else if (num < ques) {
        alert('Загаданное число меньше');
        question();
    } else if (num > ques) {
        alert('Загаданное число больше');
        question();
    }else {
        return alert('Вы угадали число!');
    }     
}

question();