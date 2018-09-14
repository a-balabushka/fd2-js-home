// Exercise 3 =)
'use strict';
alert('Hello! Please, write your arguments. Empty string, not a number or Cancel finishes typing.');
var numbers = [];
var argument;
var transformed;
var sum = 0;
for (var i = 0; i < 100; i++) {
  argument = prompt('Write your ' + (i + 1) + ' argument:', '');
  if ((argument === '') || (argument === null)) break;
  transformed = parseInt(argument, 0);
  if (isNaN(transformed) === true) break;
  numbers.push(transformed);
  sum += numbers[i];
}
alert('Arguments list: ' + numbers + '\n' + 'Amount of elements: ' + numbers.length + '\n' + 'Sum: ' + sum);