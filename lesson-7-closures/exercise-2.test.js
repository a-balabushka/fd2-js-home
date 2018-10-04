var interviewQuestion = require('./exercise-2');
describe('Check iterview result', function () {
  it('Checking designer option', function () {
    expect(interviewQuestion('Alex')('designer')).toBe('Alex can you please explain what UX design is?');
  });
  it('Checking teacher option', function () {
    expect(interviewQuestion('Alex')('teacher')).toBe('What subject do you teach Alex?');
  });
  it('Checking other option', function () {
    expect(interviewQuestion('Alex')('other')).toBe('Hello Alex what do you do?');
  });
});