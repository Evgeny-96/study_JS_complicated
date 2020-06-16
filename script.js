"use strict";

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function question(num) {
    let i = 10;

    function question1() {
        let validate;
        let ques = prompt('Угадай число от 1 до 100');
        if (Boolean(ques) === false && ques !== '') {
            alert('Вы закончили игру!');
            return 0;
        } else if (!isNumber(ques)) {
            alert('Введи число!');
            question1();
        } else if (num < ques) {
            i--;
            if (i === 0) {
                validate = confirm('Попытки закончились, хотите сыграть еще?');
                if (validate) {
                    question(num);
                } else if(!validate) {
                    return 0;
                }
            }
            alert('Загаданное число меньше, осталось попыток: ' + i);
            question1();
        } else if (num > ques) {
            i--;
            if (i === 0) {
                validate = confirm('Попытки закончились, хотите сыграть еще?');
                if (validate) {
                    question(num);
                } else if(!validate) {
                    return 0;
                }
            }
            alert('Загаданное число больше, осталось попыток: ' + i);
            question1();
        } else {
            validate = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
            if (validate) {
                question(num + 3);
            } else {
                return 0;
            }

        }

    }
    question1();
}

question(20);