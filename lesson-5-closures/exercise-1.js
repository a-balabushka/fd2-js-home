'use strict';

var lattice = '';
do {
  var rowS = prompt('Please, enter number of rows:', '8');
  var row = parseInt(rowS, 0);
  var columnS = prompt('Please, enter number of columns:', '8');
  var column = parseInt(columnS, 0);
} while (isNaN(row) || isNaN(column));
for (var i = 0; i < column; i++) {
  for (var j = 0; j < row; j++) {
    j % 2 === i % 2 ? lattice += '#' : lattice += '\\';
  }
  lattice += '\n';
}
console.log(lattice);
