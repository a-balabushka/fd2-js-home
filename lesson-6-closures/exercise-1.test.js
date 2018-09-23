var exercise = require('./exercise-1');
describe('Coding challenge 5. Calculator', function () {
  describe('John', function () {
    it('Checking values tips', function () {
      expect(exercise.john.tips).toEqual(['18.60', '9.60', '26.80', '27.00', '8.40']);
    });
    it('Checking values bills + tips', function () {
      expect(exercise.john.billsAndTips).toEqual([142.60, 57.60, 294.80, 207.00, 50.40]);
    });
    it('Checking values average tips', function () {
      expect(exercise.john.averageTips).toEqual('18.08');
    });
  });
  describe('Mark', function () {
    it('Checking values tips', function () {
      expect(exercise.mark.tips).toEqual(['15.40', '93.75', '11.00', '9.00']);
    });
    it('Checking values bills + tips', function () {
      expect(exercise.mark.billsAndTips).toEqual([92.40, 468.75, 121.00, 54.00]);
    });
    it('Checking values average tips', function () {
      expect(exercise.mark.averageTips).toEqual('32.29');
    });
  });
  describe('The result. Who spent more tips', function () {
    it('Mark\'s family paid the highest tips on average than John\'s family.', function () {
      expect(exercise.tipAverage(exercise.john.averageTips) < exercise.tipAverage(exercise.mark.averageTips)).toBeTruthy();
    });
  });
});