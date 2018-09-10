while (1) {
  var fullName = prompt('Please, write your full name. Apart.', '');
  if (/^[a-z]+ [a-z]+ [a-z]+$/i.test(fullName)) break;
  alert('Invalid argument. Please, try again');
}
while (1) {
  var ageInYears = prompt('Enter your age:', '');
  if (parseInt(ageInYears, 0) > 0) break;
  alert('Invalid argument. Please, try again');
}
var gender = confirm('Are you a man?', '');
var ageInDays = ageInYears * 365;
var inFiveYears = +ageInYears + 5;
var pension = 'no';
if (gender === true && ageInYears >= 65) {
  gender = 'male';
  pension = 'yes';
} else if (gender === true && ageInYears < 65) {
  gender = 'male';
  pension = 'no';
} else if (gender === false && ageInYears >= 60) {
  gender = 'female';
  pension = 'yes';
} else if (gender === false && ageInYears < 60) {
  gender = 'female';
  pension = 'no';
}
alert('Your full name: ' + fullName + '\n' + 'Your age in years: ' + ageInYears + '\n' + 'Your age in days: ' + ageInDays + '\n' + 'In 5 years you will be: ' + inFiveYears + '\n' + 'Your gender: ' + gender + '\n' + 'You are retired ' + pension);


