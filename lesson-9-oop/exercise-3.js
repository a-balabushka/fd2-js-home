'use strict';

function anClean(userString) {
  var item;
  var obj = {};
  var conclusion = [];
  for (var i = 0; i < userString.length; i++) {
    item = userString[i].toLowerCase().split('').sort().join('');
    if (item in obj) {
      continue;
    }
    obj[item] = userString[i];
    conclusion.push(obj[item]);
  }
  return conclusion;
}

module.exports = anClean;