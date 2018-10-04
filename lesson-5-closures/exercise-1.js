'use strict';

function roundingOff(n) {
  return Math.floor(parseInt(n, 0));
}

function drawConsole(row, column, symbOne, symbTwo) {
  symbOne = symbOne || '#';
  symbTwo = symbTwo || '\\';
  var userString = '';
  for (var i = 0; i < column; i++) {
    for (var j = 0; j < row; j++) {
      j % 2 === i % 2 ? userString += symbOne : userString += symbTwo;
    }
    userString += '\n';
  }
  console.log(userString);
}

do {
  var rowS = prompt('Please, enter number of rows:', '8');
  var columnS = prompt('Please, enter number of columns:', '8');
  var row = roundingOff(rowS);
  var column = roundingOff(columnS);
} while (isNaN(row) || isNaN(column));

drawConsole(row, column, '#', ' ');
drawConsole(row, column, '$');
drawConsole(row, column);

