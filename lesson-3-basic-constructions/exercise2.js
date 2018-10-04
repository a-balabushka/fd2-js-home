'use strict';

function considers() {
  var message = prompt('Enter your string:', '');
  var vowels = 'аеёиоуыэюя';
  var count = 0;
  for (var i = 0; i < message.length; i++) {
    var C = message.toLowerCase().charAt(i);
    if (vowels.indexOf(C) !== -1 ) {
      count++;
    }
  }
  console.log('Number of vowels in string: ' + count);
}
considers();