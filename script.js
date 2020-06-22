"use strict";

let week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
let date1 = new Date();
for (let i = 0; i < week.length; i++) { 
    if (i === 0 || i === 6) {
        document.write('<i style = "color: red;">' + week[i] + '</i>' + '<br>');
    } else if ( i === date1.getDay()) {
        document.write('<strong style = " color: darkgreen;">' + week[i]  + '</strong>' + '<br>');
    } else {
        document.write(week[i] + '<br>');
    }
}


