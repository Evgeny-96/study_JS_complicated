"use strict";
/* -----------1 задание ------------ */
console.log('----- 1 задание ------');

let num;
let buf = [];
let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let arr = ['25', '35', '45', '65', '261', '42', '66'];

function record() {
    for (let i = 0; i < 7; i++) {
        num = prompt('Введите простое ' + (i + 1) + '-е' + ' многозначные число: ');
        while (!isNumber(num)) {
            num = prompt('Введите простое ' + (i + 1) + '-е' + ' многозначные число еще раз: ');
        }
        arr[i] = num;
    }
    return arr;
}

num = record();

console.log('Начальный массив: ', String(num));

function check() {
    for (let i = 0, j = 0; i < 7; i++) {
        if (String(num[i]).startsWith('2') || String(num[i]).startsWith('4')) {
            buf[j] = num[i];
            j++;
        }
    }
    return buf;
}
console.log('Числа начианются на 2 и 4: ', String(check()));

/* -----------2 задание ------------ */
console.log('----- 2 задание ------');
let numb, n = 100;
for (let i = 2; i < n; i++) {
    for (let j = 2; j <= i; j++) {
        if (i === j) {
            console.log('Делитель числа ' + i + ': 1 и ' + j);
        }
        if (i % j === 0) {
            break;
        }
    }
}
