"use strict";

// Все задание по Уроку 12 сделал тут. Функции с разными заданиями, выбор заданий(почему-то решил так сделать) и в конце задания на простую перепись "if" в "?"
// Проверка стандарта
function function_n1() {
	var officialName = prompt("Каково «официальное» название JavaScript?","");
	if (officialName == 'ECMAScript') {
		alert("Верно!");
	}else{
		alert('Не знаете? "ECMAScript"!')
	}
}
// Получить знак чилсва
function function_n2() {
	var number = prompt("Введите число","");
	if (number > 0) {
		alert(1);
	}else if (number < 0) {
		alert(-1);
	}else{
		alert(0);
	}
}
// Проверка логина
function function_n3() {
	var user = prompt("Кто пришел?",""),password;
	if (user) {
		if (user != "Админ") {
			alert("Я вас не знаю");
		}else{
			password = prompt("Пароль?","");
			if (password){
				if (password != "Черный Властелин"){
					alert("Пароль неверен");
				}else{alert("Добро пожаловать!");}
			}else{alert("Вход отменен")}
		}
	}else{alert("Вход отменен")}
}
// Сделал выбор задания
var task = +prompt('Выберитер номер задания:\n1 - Проверка стандарта\n2 - Получить знак чилсва\n3 - Проверка логина','');
if (task == 1) {function_n1()}
	else if (task == 2) {function_n2()}
			else if (task == 3){function_n3()}
				else {alert("Такого задания нет")};

/*======= Задания на перезапись =======*/
// Перепишите 'if' в '?'
	var sum = (a + b < 4) ? 'Мало' : 'Много';
// Перепишите 'if..else' в '?'
	var message = (login == "Вася")? message = "Привет" :
	(login == "Директор")? message = "Здравствуйте" :
	(login == "")? message = "Нет логина" :
	message = "";
