'use strict';

var drinkStorage =  new AJAXStorage();
var name;
var alcohol = '';
var recipe = '';

function addDrink() {
  do {
    name = prompt('Please, enter drink name');
  } while (!name);

  alcohol = confirm('Does the drink contain alcohol?');

  do {
    recipe = prompt('PLease, write a drink recipe:');
  } while (!recipe);

  drinkStorage.addValue(name, [alcohol, recipe]);
}

function getDrink() {
  name = prompt('Please, choose drink name');
  if (drinkStorage.getValue(name)) {
    alert('Drink name: ' + name + '\n' + 'Alcohol: ' + drinkStorage.getValue(name)[0] + '\n' + 'Recipe: ' + '\n'  + drinkStorage.getValue(name)[1]);
  } else {
    alert('Output error. Don\'t find this drink =(');
  }
}

function deleteDrink() {
  name = prompt('Please, choose drink name');
  if (drinkStorage.deleteValue(name)) {
    alert(name + ' remove successful');
  } else {
    alert('Remove error. Don\'t find this drink =(');
  }
}

function showDrinksList() {
  var drinksArr = drinkStorage.getKeys();
  alert('In stock:' + '\n' + drinksArr.join('\n'));
}
