// Exercise 3 =)
'use strict';

alert('Hello! Please, write your arguments. Empty string, not a number or Cancel finishes typing.');
var numbers = [];
var argument;
var transformed;
var sum = 0;

do {
  argument = prompt('Write your argument:', '');
  if ((argument === '') || (argument === null)) {
    break;
  }
  transformed = parseInt(argument, 0);
  if (isNaN(transformed) === true) {
    break;
  }
  numbers.push(transformed);
} while (true);

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

alert('Arguments list: ' + numbers + '\n' + 'Amount of elements: ' + numbers.length + '\n' + 'Sum: ' + sum);