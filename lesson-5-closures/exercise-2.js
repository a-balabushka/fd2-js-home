'use strict';

function deleteClass(styleCss, cls) {
  var styleClass = styleCss.className.split(' ');
  for (var i = 0; i < styleClass.length; i++) {
    if (styleClass[i] === cls) {
      styleClass.splice(i, 1);
      i--;
    }
  }
  styleCss.className = styleClass.join(' ');
}

var styleCss = {
  className: 'open menu menu'
};

deleteClass(styleCss, 'menu');
deleteClass(styleCss, 'noClass');
console.log(styleCss.className);