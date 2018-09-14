// Exercise 2
'use strict';
var image = {
  width: 100,
  height: 400,
  title: 'Cool image'
};
alert('INITIAL OBJECT: ' + '\n' + 'width: ' + image.width + '\n' + 'height: ' + image.height + '\n' + 'title: ' + image.title);
function multiplyNumeric(imageN) {
  for (var key in imageN) {
    if (isNaN(parseInt(imageN[key], 0)) !== true ) {
      imageN[key] *= 2;
    }
  }
}
multiplyNumeric(image);
alert('RECEIVED OBJECT: ' + '\n' + 'width: ' + image.width + '\n' + 'height: ' + image.height + '\n' + 'title: ' + image.title);

