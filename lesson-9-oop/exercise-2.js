'use strict';

function checkPalindrome(userString) {
  userString.replace(/\s+/g, '').toLowerCase();
  var firstHalfString = userString.slice(0, userString.length / 2);
  var secondHalfString = userString.slice(userString.length / 2, userString.length).split('').reverse().join('');
  return (firstHalfString === secondHalfString) ? console.log(true) : console.log(false);
}

module.exports = checkPalindrome;