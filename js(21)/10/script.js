"use strict";

function isInteger(num) {
  return (num^0) === num;
}

var number = +prompt('Введите число','');
alert(isInteger(number));