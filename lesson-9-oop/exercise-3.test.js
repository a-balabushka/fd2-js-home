var exercise3 = require('./exercise-3');
describe('Anagrams', function () {
  it('Word output without anagrams', function () {
    expect(exercise3(['воз', 'киборг', 'корсЕт', 'ЗОВ', 'алеша', 'гробик', 'костер', 'сектор'])).toEqual(['воз', 'киборг', 'корсЕт', 'алеша']);
  });
});