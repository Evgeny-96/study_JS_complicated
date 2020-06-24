"use strict";

let time = setInterval(function () {

    /* ---------------Задание 1а----------- */

    let dateNow = new Date();
    let monthN = dateNow.toLocaleDateString('ru', {
            month: 'long'
        }),
        dayN = dateNow.toLocaleDateString('ru', {
            weekday: 'long'
        });

    function minutName(data) {
        let buf = data % 10;
        if (buf === 1) {
            return ' ' + dateNow.getMinutes() + ' ' + 'минута';
        } else if (buf === 2 || buf === 3 || buf === 4) {
            return ' ' + dateNow.getMinutes() + ' ' + 'минуты';
        } else {
            return ' ' + dateNow.getMinutes() + ' ' + 'минут';
        }
    }

    function secName(data) {
        let buf = data % 10;
        if (buf === 1) {
            return ' ' + dateNow.getSeconds() + ' ' + 'секунда';
        } else if (buf === 2 || buf === 3 || buf === 4) {
            return ' ' + dateNow.getSeconds() + ' ' + 'секунды';
        } else {
            return ' ' + dateNow.getSeconds() + ' ' + 'секунд';
        }
    }

    function hourName(data) {
        let buf = data % 10;
        if (buf === 1) {
            return dateNow.getHours() + ' ' + 'час';
        } else if (buf === 2 || buf === 3 || buf === 4) {
            return ' ' + dateNow.getHours() + ' ' + 'часа';
        } else {
            return ' ' + dateNow.getHours() + ' ' + 'часов';
        }
    }

    function dayName(data) {
        data = data[0].toUpperCase() + data.slice(1);
        return data;
    }

    function monthName(data) {
        if (dateNow.getMonth() === 2 || dateNow.getMonth() === 7) {
            return dateNow.getDay() + ' ' + data.replace('ь', 'а');
        } else {
            return dateNow.getDay() + ' ' + data.replace('ь', 'я');
        }
    }
    let timeOutputlong = 'Сегодня ' + dayName(dayN) + ', ' + monthName(monthN) + ' ' + dateNow.getFullYear() + ' года, ' + hourName(dateNow.getHours()) + minutName(dateNow.getMinutes()) + secName(dateNow.getSeconds());

    document.querySelector('#time').innerHTML = timeOutputlong;


    /* ---------------Задание 1б----------- */

    function dayNumber(data) {
        if (data < 10) {
            return '0' + data;
        } else {
            return data;
        }
    }

    let timeOutputShort = dayNumber(dateNow.getDay()) + '.' + dayNumber(dateNow.getMonth() + 1) + '.' + dateNow.getFullYear() + ' - ' + dayNumber(dateNow.getHours()) + ':' + dayNumber(dateNow.getMinutes()) + ':' + dayNumber(dateNow.getSeconds());

    document.querySelector('#time1').innerHTML = timeOutputShort;

}, 1000);
