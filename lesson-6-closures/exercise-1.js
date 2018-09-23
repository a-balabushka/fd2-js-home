'use strict';

function fixedNum(n) {
  return n.toFixed(2);
}

function tipAverage(r, v) {
  return r + +v;
}
var john = {
  bills: [124, 48, 268, 180, 42],
  tips: [],
  billsAndTips: [],
  averageTips: 0,
  calculateTips: function () {
    for (var i = 0; i < john.bills.length; i++) {
      if (john.bills[i] < 50) {
        john.tips[i] = fixedNum(john.bills[i] * 0.2);
      } else if (john.bills[i] >= 50 && john.bills[i] < 200) {
        john.tips[i] = fixedNum(john.bills[i] * 0.15);
      } else {
        john.tips[i] = fixedNum(john.bills[i] * 0.1);
      }
      john.billsAndTips[i] = john.bills[i] + +john.tips[i];
    }
  }
};
john.calculateTips();
console.log('John tips = ' + john.tips);
console.log('John bills + tips = ' + john.billsAndTips);
console.log('-----------------------------------------');

var mark = {
  bills: [77, 375, 110, 45],
  tips: [],
  billsAndTips: [],
  averageTips: 0,
  calculateTips: function () {
    for (var i = 0; i < mark.bills.length; i++) {
      if (mark.bills[i] < 100) {
        mark.tips[i] = fixedNum(mark.bills[i] * 0.2);
      } else if (mark.bills[i] >= 100 && mark.bills[i] < 300) {
        mark.tips[i] = fixedNum(mark.bills[i] * 0.1);
      } else {
        mark.tips[i] = fixedNum(mark.bills[i] * 0.25);
      }
      mark.billsAndTips[i] = mark.bills[i] + +mark.tips[i];
    }
  }
};
mark.calculateTips();
console.log('Mark tips = ' + mark.tips);
console.log('Mark bills + tips = ' + mark.billsAndTips);
console.log('-----------------------------------------');

john.averageTips = fixedNum(john.tips.reduce(tipAverage, 0) / john.tips.length);
mark.averageTips = fixedNum(mark.tips.reduce(tipAverage, 0) / mark.tips.length);

if (john.averageTips > mark.averageTips) {
  console.log('John\'s family paid the highest tips on average than Mark\'s family.' + '\n' + 'John average tips = ' + john.averageTips + ', Mark average tips = ' + mark.averageTips);
} else if (john.averageTips < mark.averageTips) {
  console.log('Mark\'s family paid the highest tips on average than John\'s family.'  + '\n' + 'John average tips = ' + john.averageTips + ', Mark average tips = ' + mark.averageTips);
} else {
  console.log('John\'s family paid tips on average as many as Mark\'s family.'  + '\n' + 'John average tips = ' + john.averageTips + ', Mark average tips = ' + mark.averageTips);
}

module.exports.john = john;
module.exports.mark = mark;
module.exports.tipAverage = tipAverage;