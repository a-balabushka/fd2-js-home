'use strict';

function interviewQuestion(firstName) {
  return function (profession) {
    if (profession === 'designer') {
      console.log(firstName + ' can you please explain what UX design is?');
    } else if (profession === 'teacher') {
      console.log('What subject do you teach ' + firstName + '?');
    } else if (profession === 'other') {
      console.log('Hello ' + firstName + ' what do you do?');
    }
    return profession;
  };
}
/* var firstName = prompt('Enter your name, please: ', 'Artur');
var profession = prompt('Enter your profession, please: ', 'teacher');

interviewQuestion(firstName)(profession); */
interviewQuestion('Alex')('teacher');

module.exports = interviewQuestion;