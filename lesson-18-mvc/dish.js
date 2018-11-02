'use strict';

var dishStorage =  new TLocalStorage('DISHES');
var dishName;
var dishRecipe = '';

(function updateStorage() {
  var obj = dishStorage.reset();
  for (var key in obj) {
    dishStorage.addValue(key, obj[key]);
  }
})();

document.querySelector('.dish-btn-add').addEventListener('click', function () {
  do {
    dishName = prompt('Please, enter dish name');
  } while (!dishName);

  do {
    dishRecipe = prompt('PLease, write a dish recipe:');
  } while (!dishRecipe);

  dishStorage.addValue(dishName, dishRecipe);
  dishStorage.store();
});

document.querySelector('.dish-btn-get-value').addEventListener('click', function () {
  dishName = prompt('Please, choose dish name');
  if (dishStorage.getValue(dishName)) {
    alert('Dish name: ' + dishName + '\n' + 'Recipe: ' + '\n'  + dishStorage.getValue(dishRecipe));
  } else {
    alert('Output error. Don\'t find this dish =(');
  }
});

document.querySelector('.dish-btn-delete').addEventListener('click', function () {
  dishName = prompt('Please, choose dish name');
  if (dishStorage.deleteValue(dishName)) {
    alert(dishName + ' remove successful');
  } else {
    alert('Remove error. Don\'t find this dish =(');
  }
  dishStorage.store();
});

document.querySelector('.dish-btn-get-keys').addEventListener('click', function () {
  var dishesArr = dishStorage.getKeys();
  alert('In stock:' + '\n' + dishesArr.join('\n'));
});