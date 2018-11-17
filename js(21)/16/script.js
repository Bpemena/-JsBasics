"use strict";

// Напишите "if", аналогичный "switch"
function function_n1() {
	var browser = prompt('Укажите ваш браузер: IE, Chrome, Firefox, Safari, Opera.','');
	if (browser === 'IE') {alert('О, да у вас IE!')}
		else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera'){alert('Да, и эти браузеры мы поддерживаем')}
			else {alert('Мы надеемся, что и в вашем браузере все ок!')};
};
// Переписать if'ы в switch
function function_n2() {
	var a = +prompt('a?','');
	switch(a){
		case 0: alert(0);break;
		case 1: alert(1);break;
		case 2:
		case 3: alert('2,3');break;
		default: alert('Указано неподходящее число!');
	}
};
// Выбор задания
var task = +prompt('Выберитер номер задания:\n1 - Напишите "if", аналогичный "switch"\n2 - Переписать "if"-ы в "switch"','');
if (task == 1) {function_n1()}
	else if (task == 2) {function_n2()}
			else {alert("Такого задания нет")};