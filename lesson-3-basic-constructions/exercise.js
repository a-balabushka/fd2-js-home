do {
  var fullName = prompt('Please, write your full name. Apart.', '');
} while (!fullName.match(/[a-z]+ [a-z]+ [a-z]/ig));

do {
  var ageInYearsS = prompt('Enter your age:', '');
  var ageInYears = parseInt(ageInYearsS, 0);
} while (isNaN(ageInYears) || (ageInYears <= 0) || (ageInYears) > 120);

var gender = confirm('Are you a man?', '');
var ageInDays = ageInYears * 365;
var inFiveYears = ageInYears + 5;
var pension = false;

if (gender && (ageInYears >= 63)) {
  pension = true;
} else if (!gender && (ageInYears >= 58)) {
  pension = true;
}

gender = (gender) ? 'male' : 'female';

alert('Your full name: ' + fullName + '\n' + 'Your age in years: ' + ageInYears + '\n' + 'Your age in days: ' + ageInDays + '\n' + 'In 5 years you will be: ' + inFiveYears + '\n' + 'Your gender: ' + gender + '\n' + 'You are retired ' + pension);