'use strict';

function checkPalindrome(userString) {
  var string = userString.split(' ').join('').toLowerCase().split('');
  var stringR = string.slice().reverse();
  return string.join('') === stringR.join('');
}

module.exports = checkPalindrome;
