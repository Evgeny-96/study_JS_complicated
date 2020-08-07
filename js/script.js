'use strict'; //строгий режим

//создаем функцию, которая принимает два значения тип и значение, 
//фильтруем по значениям и в результате присваиваем значение, если значение совпадает с типом данных
const filterByType = (type, values) => {
	values = values.split(',');
	let b = values.map(item => {
		const elem = parseFloat(item);
		if (item.toLowerCase() === 'true') {
			console.log(`item: ${item} - ${Boolean(item)}`);
		}
		
		if (isNaN(item)) {
			return item;
		} else {
			return elem;
		}
	});
	console.log('b: ', b);
	return b.filter(b => typeof b === type);
	// return values.filter(value => typeof value === type);
};
	//создаем функцию результатом которой будет созданием переменной с массом значений по классу и скрытие значений
const	hideAllResponseBlocks = () => {
		
		const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block'));
		//перебор всех значений массива и присваиванием всем элементам массива display = 'none'
		responseBlocksArray.forEach(block => block.style.display = 'none');
	},
	//функция получает три элемента
	showResponseBlock = (blockSelector, msgText, spanSelector) => {
		//вызов ранее созданной функции
		hideAllResponseBlocks();
		//получаем по селектору элементы и присваиваем значение display = 'block'
		document.querySelector(blockSelector).style.display = 'block';
		// если spanSelector существует
		if (spanSelector) {
			//то присваиваем выбранным элементам значение msgText
			document.querySelector(spanSelector).textContent = msgText;
		}
	},
	//создаем функцию, которая вызывает функцию, показывающую элементы, передает в качестве элемента id=#error
	showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error'),

	//создаем функцию, которая вызывает туже функцию и передает другие данные и id='#ok'
	showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok'),

	//создаем функцию, которая вызвает туже функцию, но передает только селектор
	showNoResults = () => showResponseBlock('.dialog__response-block_no-results'),

	//создаем функцию, которая принимает два аругмента
	tryFilterByType = (type, values) => {
		//создаем блок try
		try {
			//создаем переменную, которая возвращает код - значения, полученные из окна ввода
			// const valuesArray = eval(`filterByType('${type}', ${values})`).join(", ");
			// values = values.split(', ');
			const valuesArray = filterByType(type, values);
			// console.log('valuesArray: ', valuesArray);
			//создаем переменную: - результат - условие, если есть значение, то..., если нет значения, то ...
			const alertMsg = (valuesArray.length) ?
				`Данные с типом ${type}: ${valuesArray}` :
				`Отсутствуют данные типа ${type}`;
			//вызываем функцию с результатом условия предыдущего значения переменной
			showResults(alertMsg);
		} catch (e) {
		//в случае ошибки вызываем функцию и передаем ей значение ошибки
			showError(`Ошибка: ${e}`);
		}
	};
//получаем элемент по id
const filterButton = document.querySelector('#filter-btn');

//отслеживаем событие клик по кнопке
filterButton.addEventListener('click', e => {
	//получаем значение поля с id='type'
	const typeInput = document.querySelector('#type');

	//получаем значение поля с id='data'
	const dataInput = document.querySelector('#data');

	//если значение поля пустое
	if (dataInput.value === '') {
		//выводим специальное сообщение для поля
		dataInput.setCustomValidity('Поле не должно быть пустым!');
		//запуск функции
		showNoResults();
	} else {
		//выводим пустое специальное сообщение для поля
		dataInput.setCustomValidity('');
		//обнуляем все события у кнопки
		e.preventDefault();
		//вызываем функцию, передаем ей в качестве параметров значения поля без лишних пробелов
		tryFilterByType(typeInput.value.trim(), dataInput.value.trim());
	}
});

