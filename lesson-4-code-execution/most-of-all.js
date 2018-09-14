// Exercise 1
'use strict';
var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};
var amount = 0; var name;
for (var key in tasksCompleted) {
  if (amount < tasksCompleted[key]) {
    amount = tasksCompleted[key];
    name = key;
  }
}
alert('Most of all completed exercise ' + name + '. He/She decided ' + amount + ' exercise!!!');
