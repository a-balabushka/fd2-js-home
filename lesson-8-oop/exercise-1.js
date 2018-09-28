'use strict';

function Question(_number, _question, _answers, _correctAnswer) {
  this.number = _number;
  this.question = _question;
  this.answers = _answers;
  this.correctAnswer = _correctAnswer;
  this.show = function () {
    console.log(this.number + ') ' + this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log('\t' + (i + 1) + '. ' + this.answers[i] + '\n');
    }
  };
  this.checkAnswer = function () {
    do {
      var userAnswer = parseInt(prompt('Please, enter number of correct answer: ', ''), 0);
    } while (isNaN(userAnswer) || (userAnswer <= 0) || (userAnswer > this.answers.length));
    userAnswer == this.correctAnswer ? console.log(true) : console.log(false);
  };
}
var question1 = new Question('1', 'In what year Hrodna was founded?', ['1158', '1128', '1023'], '2');
var question2 = new Question('2', 'How many people live in Hrodna?', ['350 718', '380 560', '345 080', '370 919'], '4');
var question3 = new Question('3', 'Which telephone code in Hrodna?', ['+375 152', '+375 154', '+375 156'], '1');
var question4 = new Question('4', 'Which car code in Hrodna?', ['7', '2', '1', '4'], '4');

var allQuestions = [question1, question2, question3, question4];

function randomInteger(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

var randomQuestion = randomInteger(0, allQuestions.length - 1);

allQuestions[randomQuestion].show();
allQuestions[randomQuestion].checkAnswer();