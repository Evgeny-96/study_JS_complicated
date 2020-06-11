"use strict";
let num = 266219;


function calculate(numArray) {
    let i, sum = 1;
    for (i = 0; i < numArray.length; i++) {
        sum *= numArray[i];
    }
    return sum;
}

function calc(num) {
    let numArr = num.toString().split('').map(Number);
    return calculate(numArr);
}

let composition = calc(num);

console.log('произведение чисел: ', composition);

console.log('Возведение в степень 3: ', composition ** 3);

console.log('Вывод перввых двух цифр: ', (composition**3).toString().substr(0,2));

