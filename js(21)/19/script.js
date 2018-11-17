'use strict';
// Вычислить сумму чисел до данного
// через рекурсию
function sumTo(n){
	if (n>1) {
		return n + sumTo(n-1);
	}else{
		return n;
	}
}
/* Закомментировал циклический вариант и арифметическую прогрессию
// через цикл
function sumTo(n){
	var sum = 0;
	for(;n>0;n--){
		sum+=n;
	}
	return sum;
}

// через арифметическую прогрессию
function sumTo(n){
	return n*(n+1)/2
}
*/

// Вычислить факториал
function factorial(n){
	if (n>1){
		return n * factorial(n-1);
	}else{return n}
}
// Числа Фибоначчи
function fib(n) {
  var a = 1,
    b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}


var task = +prompt('Выберитер номер задания:\n1 - Вычислить сумму чисел до данного\n2 - Вычислить факториал\n3 - Числа Фибоначчи','');
if (task == 1) {
	var number = +prompt('n?','');
	alert(sumTo(number));
}else if (task == 2) {
	var number = +prompt('n?','');
	alert(factorial(number));
}else if (task == 3){
	var number = +prompt('n?','');
	alert(fib(number));
}else {alert("Такого задания нет")};