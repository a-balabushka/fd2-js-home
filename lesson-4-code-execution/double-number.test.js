var multiplyNumeric = require('./double-number');
describe('Function of increasing the value by 2', function () {
  it('Check of the changed object', function () {
    expect(multiplyNumeric({width: 100, height: 400, title: 'Cool image'}))
      .toEqual({width: 200, height: 800, title: 'Cool image'});
  });
});