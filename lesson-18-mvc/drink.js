'use strict';
var drinkStorage =  new TLocalStorage('DRINKS');
var drinkName;
var drinkAlcohol = '';
var drinkRecipe = '';

(function updateStorage() {
  var obj = drinkStorage.reset();
  for (var key in obj) {
    drinkStorage.addValue(key, obj[key]);
  }
})();

document.querySelector('.drink-btn-add').addEventListener('click', function () {
  do {
    drinkName = prompt('Please, enter drink name');
  } while (!drinkName);

  drinkAlcohol = confirm('Does the drink contain alcohol?');

  do {
    drinkRecipe = prompt('PLease, write a drink recipe:');
  } while (!drinkRecipe);

  drinkStorage.addValue(drinkName, [drinkAlcohol, drinkRecipe]);
  drinkStorage.store();
});

document.querySelector('.drink-btn-get-value').addEventListener('click', function () {
  drinkName = prompt('Please, choose drink name');
  if (drinkStorage.getValue(drinkName)) {
    alert('Drink name: ' + drinkName + '\n' + 'Alcohol: ' + drinkStorage.getValue(drinkName)[0] + '\n' + 'Recipe: ' + '\n'  + drinkStorage.getValue(drinkName)[1]);
  } else {
    alert('Output error. Don\'t find this drink =(');
  }
});

document.querySelector('.drink-btn-delete').addEventListener('click', function () {
  drinkName = prompt('Please, choose drink name');
  if (drinkStorage.deleteValue(drinkName)) {
    alert(drinkName + ' remove successful');
  } else {
    alert('Remove error. Don\'t find this drink =(');
  }
  drinkStorage.store();
});

document.querySelector('.drink-btn-get-keys').addEventListener('click', function () {
  var drinksArr = drinkStorage.getKeys();
  alert('In stock:' + '\n' + drinksArr.join('\n'));
});
