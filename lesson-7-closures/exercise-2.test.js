var interviewQuestion = require('./exercise-2');
describe('Check iterview result', function () {
  it('Checking designer option', function () {
    expect(interviewQuestion('Alex')('designer')).toBe('designer');
  });
  it('Checking teacher option', function () {
    expect(interviewQuestion('Alex')('teacher')).toBe('teacher');
  });
  it('Checking other option', function () {
    expect(interviewQuestion('Alex')('other')).toBe('other');
  });
});