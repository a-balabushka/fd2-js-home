var getWinnerName = require('./most-of-all');
describe('Function finds people, who solved the most tasks', function () {
  it('Display a name with a large number of tasks', function () {
    expect(getWinnerName({'Anna': 29, 'Serg': 35, 'Elena': 1, 'Anton': 99}))
      .toEqual('Anton');
  });
});