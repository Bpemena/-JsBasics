"use strict";

// =========== Перепишите функцию, используя оператор '?' или '||' ===========
function checkAge(age){
	return (age>18)?true:confirm('Родители разрешили?');
}

function checkAge(age){
	return (age>18)||confirm('Родители разрешили?');
}
// Функция min
function min(a,b){
	if (a<b){return a;}else{return b;};
}

// Функция pow(x,n) ------- Только у этой функции запрашивался вывод на страницу
function pow(x,n){
	var number = x;
	for (;n>1;n--){
		number *= x;
	}
	return number;
}

var x = +prompt('x?',''), n= +prompt('n?','');
if (n>1){alert(pow(x,n))}else{alert('Неверная степень или задана единица')};