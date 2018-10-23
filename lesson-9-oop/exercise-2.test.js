var exercise = require('./exercise-2');
describe('Palindrome', function () {
  it('Checking the value \'Anna\' on the palindrome', function () {
    expect(exercise('Anna')).toBeTruthy();
  });
  it('Checking the value \'А роза упала на лапу Азора\' on the palindrome', function () {
    expect(exercise('А роза упала на лапу Азора')).toBeTruthy();
  });
  it('Checking the value \'Вася\' on the palindrome', function () {
    expect(exercise('Вася')).toBeFalsy();
  });
  it('Checking the value \'12321\' on the palindrome', function () {
    expect(exercise('12321')).toBeTruthy();
  });
  it('Checking the value \'123212\' on the palindrome', function () {
    expect(exercise('123212')).toBeFalsy();
  });
});