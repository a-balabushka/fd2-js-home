'use strict';

function tipAverage(R, V) {
  return R + +V;
}
var john = {
  bills: [124, 48, 268, 180, 42],
  tips: [],
  billsAndTips: [],
  averageTips: 0
};
for (var i = 0; i < john.bills.length; i++) {
  if (john.bills[i] < 50) {
    john.tips[i] = (john.bills[i] * 0.2).toFixed(2);
  } else if (john.bills[i] >= 50 && john.bills[i] < 200) {
    john.tips[i] = (john.bills[i] * 0.15).toFixed(2);
  } else {
    john.tips[i] = (john.bills[i] * 0.1).toFixed(2);
  }
  john.billsAndTips[i] = john.bills[i] + +john.tips[i];
}
console.log('John tips = ' + john.tips);
console.log('John bills + tips = ' + john.billsAndTips);
console.log('-----------------------------------------');
var mark = {
  bills: [77, 375, 110, 45],
  tips: [],
  billsAndTips: [],
  averageTips: 0
};
for (i = 0; i < mark.bills.length; i++) {
  if (mark.bills[i] < 100) {
    mark.tips[i] = (mark.bills[i] * 0.2).toFixed(2);
  } else if (mark.bills[i] >= 100 && mark.bills[i] < 300) {
    mark.tips[i] = (mark.bills[i] * 0.1).toFixed(2);
  } else {
    mark.tips[i] = (mark.bills[i] * 0.25).toFixed(2);
  }
  mark.billsAndTips[i] = mark.bills[i] + +mark.tips[i];
}
console.log('Mark tips = ' + mark.tips);
console.log('Mark bills + tips = ' + mark.billsAndTips);
console.log('-----------------------------------------');
john.averageTips = (john.tips.reduce(tipAverage, 0) / john.tips.length).toFixed(2);
mark.averageTips = (mark.tips.reduce(tipAverage, 0) / mark.tips.length).toFixed(2);

if (john.averageTips > mark.averageTips) {
  console.log('John\'s family paid the highest tips on average than Mark\'s family.' + '\n' + 'John average tips = ' + john.averageTips + ', Mark average tips = ' + mark.averageTips);
} else if (john.averageTips < mark.averageTips) {
  console.log('Mark\'s family paid the highest tips on average than John\'s family.'  + '\n' + 'John average tips = ' + john.averageTips + ', Mark average tips = ' + mark.averageTips);
} else {
  console.log('John\'s family paid tips on average as many as Mark\'s family.'  + '\n' + 'John average tips = ' + john.averageTips + ', Mark average tips = ' + mark.averageTips);
}
