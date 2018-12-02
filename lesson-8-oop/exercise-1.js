'use strict';
(function () {
  function Question( question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  Question.prototype.showQuestion = function () {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log('\t' + (i + 1) + '. ' + this.answers[i] + '\n');
    }
  };

  Question.prototype.checkAnswer = function (answer) {
    answer == this.correctAnswer ? console.log(true) : console.log(false);
  };

  var question1 = new Question('In what year Hrodna was founded?', ['1158', '1128', '1023'], '2');
  var question2 = new Question('How many people live in Hrodna?', ['350 718', '380 560', '345 080', '370 919'], '4');
  var question3 = new Question('Which telephone code in Hrodna?', ['+375 152', '+375 154', '+375 156'], '1');
  var question4 = new Question('Which car code in Hrodna?', ['7', '2', '1', '4'], '4');

  var allQuestions = [question1, question2, question3, question4];

  function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  }

  var randomQuestion = randomInteger(0, allQuestions.length - 1);

  allQuestions[randomQuestion].showQuestion();

  var userAnswer = parseInt(prompt('Please, enter number of correct answer: ', ''), 0);

  allQuestions[randomQuestion].checkAnswer(userAnswer);
})();