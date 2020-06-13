"use strict";
let lang = ['ru', 'en'],
    rus = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб','вс'],
    eng = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat','sun'],
    mes =  confirm('Дни недели вывезди на русском (ок) или английском (отмена)?');
console.log('--------Первое задание-------');
if (mes === true) {
    console.log('if: ', String(rus)); 
} else {
    console.log('if: ', String(eng)); 
}

switch (mes) {
    case true: 
        console.log('switch: ', String(rus)); 
        break;
    case false:
        console.log('switch: ', String(eng)); 
        break;
    default: alert('Что-то пошло не так');
}

let matr = [
    ['mon', 'tue', 'wed', 'thu', 'fri', 'sat','sun'],
    ['пн', 'вт', 'ср', 'чт', 'пт', 'сб','вс']    
];

console.log('Многомерный массив: ', String(matr[(Number(mes))]));

console.log('--------Второе задание-------');

let namePerson = prompt('Введите имя: ');

let message = (namePerson === 'Артем') ? 'директор' :
                (namePerson === 'Максим') ? 'преподаватель':
                'студент';
let ending = (namePerson === 'Артем' || namePerson === 'Максим') ? 'а: ' : ':';

let post = (ending === 'а: ') ? 'Должность ' : 'Должность';

console.log(post + namePerson + ending, message);