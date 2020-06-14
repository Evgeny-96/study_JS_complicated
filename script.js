"use strict";
let arg = '    Программа для проверки длины строки на количество    ';
function argument(data) {
    if(typeof(data) !== 'string') {
        alert('аргумент НЕ строка');
        return 0;
    }
    console.log('Строка до преобразования:', data );
    console.log('Длина строки до преобразования: ', data.length);
    console.log('Строка после преобразования:', data.trim() );
    console.log('Длина строки после преобразования: ', data.trim().length);
    return data.trim().substring(0, 30);
}

console.log('Результат выполнения задачи:', argument(arg) + '...');