// Exercise 2
'use strict';

function multiplyNumeric(imageN) {
  for (var key in imageN) {
    if (isNaN(parseInt(imageN[key], 0)) !== true ) {
      imageN[key] *= 2;
    }
  }
  return imageN;
}

module.exports = multiplyNumeric;