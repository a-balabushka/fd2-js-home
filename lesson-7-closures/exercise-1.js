'use strict';

function sum(a) {
  return function (b) {
    return a + b;
  };
}
do {
  var a = parseInt(prompt('Enter a: ', ''), 0);
  var b = parseInt(prompt('Enter b: ', ''), 0);
} while (isNaN(a) || isNaN(b));

console.log(sum(a)(b));