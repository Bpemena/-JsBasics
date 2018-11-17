
// Выведите четные числа
function function_n1() {
	for (var i=2;i<=10;i++){
		if (i%2==0){alert(i)}
	};
};
// Повторять цикл, пока ввод неверен
function function_n2() {
	var number;
	do {
		number = +prompt("Введите число больше 100","");
	}while(number<=100 && number!=null);
};
// Вывести простые числа
function function_n3() {
	next: for (i=2;i<=10;i++){
		for (j=2;j<i;j++){
			if (i%j==0)continue next;
		};
		alert(i);
	};
};
//  Выбор задания
var task = prompt("Выберитер номер задания:\n1 - Выведите четные числа\n2 - Повторять цикл, пока ввод неверен\n3 - Вывести простые числа","");
if (task == 1) {function_n1()}
	else if (task == 2) {function_n2()}
		else if (task == 3){function_n3()}
			else {alert("Такого задания нет")};