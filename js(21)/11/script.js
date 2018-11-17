"use strict";

var user = confirm("Вы человек?"), userName;
// if добавил для себя)
if (user) {
	userName = prompt("Укажите ваше имя:", "");
	alert("Имя пользователя: "+userName);
} else {alert("Пользователь - не человек!")}