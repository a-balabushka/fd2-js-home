function considers() {
  var message = prompt('Enter your string:', '');
  var vowels = 'аеёиоуыэюя';
  var count = 0;
  for (var i = 0; i < message.length; i++) {
    for (var j = 0; j < 10; j++) {
      if (message[i] === vowels[j]) count++;
    }
  }
  console.log('Number of vowels in string: ' + count);
}
considers();
