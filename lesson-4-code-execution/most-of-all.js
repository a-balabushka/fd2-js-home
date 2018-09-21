// Exercise 1
'use strict';

function getWinnerName(tasksCompleted) {
  var amount = 0;
  var name;
  for (var key in tasksCompleted) {
    if (amount < tasksCompleted[key]) {
      amount = tasksCompleted[key];
      name = key;
    }
  }
  return name;
}

module.exports = getWinnerName;