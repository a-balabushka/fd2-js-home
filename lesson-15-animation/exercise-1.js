'use strict';

const fieldWidth = 700; // ширина игрового поля
const fieldHeight = 400; // выслта игрового поля
const boardWidth = 10; // толщина ракетки
const boardHeight = 100; // ширина ракетки
const ballSize = 25; // радиус шарика
let playersScore = [0, 0]; // очки игроков

const wrapper = document.getElementById('wrapper');
wrapper.appendChild(createScore());
wrapper.appendChild(createGame(fieldWidth, fieldHeight));
wrapper.appendChild(createButton());

/* *************** UI *************** */

function createGame(width, height) {
  let field = document.createElement('div');
  field.id = 'field';
  field.style.width = `${width}px`;
  field.style.height = `${height}px`;
  field.style.margin = '0 auto';
  field.style.backgroundColor = '#F0EE7E';
  field.style.border = '2px solid #777671';
  field.style.position = 'relative';
  field.appendChild(createBall(ballSize));
  field.appendChild(createBoard('leftBoard', boardWidth, boardHeight, '#09AA57'));
  field.appendChild(createBoard('rightBoard', boardWidth, boardHeight, '#191497'));
  return field;
}

function createBall(size) {
  let ball = document.createElement('div');
  ball.id = 'ball';
  ball.style.height = ball.style.width = `${size}px`;
  ball.style.backgroundColor = '#F02137';
  ball.style.borderRadius = '50%';
  ball.style.position = 'absolute';
  return ball;
}

function createBoard(id, width, height, color) {
  let board = document.createElement('div');
  board.id = id;
  board.style.width = `${width}px`;
  board.style.height = `${height}px`;
  board.style.backgroundColor = color;
  board.style.position = 'absolute';
  return board;
}

function createScore() {
  let score = document.createElement('div');
  score.id = 'score';
  score.innerHTML = '0 : 0';
  score.style.margin = '20px 0';
  score.style.textAlign = 'center';
  score.style.fontSize = '30px';
  score.style.fontFamily = 'Verdana';
  return score;
}

function createButton() {
  let btn = document.createElement('input');
  btn.id = 'start';
  btn.type = 'button';
  btn.value = 'Start!';
  btn.style.display = 'block';
  btn.style.margin = '20px auto';
  btn.style.width = '175px';
  btn.style.height = '40px';
  btn.style.fontSize = '20px';
  btn.style.fontFamily = 'Verdana';
  btn.onclick = start;
  return btn;
}


/* ************** Magic ************** */

requestAnimationFrame(tick);

let ball = {
  posX: (fieldWidth - ballSize) / 2,
  posY: (fieldHeight - ballSize) / 2,
  speedX: 0,
  speedY: 0,
  width: ballSize,
  height: ballSize,
  update() {
    let BallObj = document.getElementById('ball');
    BallObj.style.left = `${this.posX}px`;
    BallObj.style.top = `${this.posY}px`;
  }
};

function Tboard(id, x) {
  this.id = id;
  this.width = boardWidth;
  this.height = boardHeight;
  this.posX = x;
  this.posY = 150;
  this.speed = 0;
  this.update = function () {
    let obj = document.getElementById(this.id);
    obj.style.left = `${this.posX}px`;
    obj.style.top = `${this.posY}px`;
  };
}

let leftBoard = new Tboard('leftBoard', 0);
let rightBoard = new Tboard('rightBoard', fieldWidth - boardWidth);

function start() {
  ball.posX = 350;
  ball.posY = 200;
  ball.speedX = speedBallX();
  ball.speedY = speedBallY();
}

function tick() {
  ballMotion();
  boardsMotion();

  requestAnimationFrame(tick);
}

function speedBallX() {
  let n = [6, -6];
  let rand = Math.floor(Math.random() * n.length);
  return n[rand];
}

function speedBallY() {
  let n;
  do {
    n = Math.floor(Math.random() * (3 - (-3) + 1)) - 3;
  } while (n === 0);
  return n;
}

function ballMotion() {
  ball.posX += ball.speedX;
  if ((ball.posX + ball.width > fieldWidth - rightBoard.width) &&
    (ball.posY + ballSize > rightBoard.posY) &&
    (ball.posY < rightBoard.posY + rightBoard.height)) {
    ball.speedX = -ball.speedX;
  }

  if ((ball.posX < leftBoard.width) &&
    (ball.posY + ballSize > leftBoard.posY) &&
    (ball.posY < leftBoard.posY + leftBoard.height)) {
    ball.speedX = -ball.speedX;
  }

  if (ball.posX + ball.width > fieldWidth) {
    ball.posX = fieldWidth - ball.width;
    ball.speedX = 0;
    ball.speedY = 0;

    playersScore[0]++;
    displayPlayersScore();
  }

  if (ball.posX < 0) {
    ball.posX = 0;
    ball.speedX = 0;
    ball.speedY = 0;

    playersScore[1]++;
    displayPlayersScore();
  }

  ball.posY += ball.speedY;
  if (ball.posY + ball.height > fieldHeight) {
    ball.speedY = -ball.speedY;
    ball.posY = fieldHeight - ball.height;
  }

  if (ball.posY < 0) {
    ball.speedY = -ball.speedY;
  }
  ball.update();
}

function boardsMotion() {
  leftBoard.posY += leftBoard.speed;

  if (leftBoard.posY + boardHeight > fieldHeight) {
    leftBoard.posY = fieldHeight - boardHeight;
  }

  if (leftBoard.posY < 0) {
    leftBoard.posY = 0;
  }

  leftBoard.update();

  rightBoard.posY += rightBoard.speed;

  if (rightBoard.posY + boardHeight > fieldHeight) {
    rightBoard.posY = fieldHeight - boardHeight;
  }

  if (rightBoard.posY < 0) {
    rightBoard.posY = 0;
  }

  rightBoard.update();
}

function displayPlayersScore() {
  let score = document.getElementById('score');
  score.innerHTML = playersScore[0] + ' : ' + playersScore[1];
}

window.addEventListener('keydown', function (EO) {
  let event = EO || window.event;
  switch (event.keyCode) {
  case 16:
    leftBoard.speed = -4;
    break;
  case 17:
    leftBoard.speed = 4;
    break;
  case 38:
    rightBoard.speed = -4;
    break;
  case 40:
    rightBoard.speed = 4;
    break;
  case 13: // кнопка Enter. Для удобства
    start();
    break;
  }
});

window.addEventListener('keyup', function (EO) {
  let event = EO || window.event;
  switch (event.keyCode) {
  case 16:
    leftBoard.speed = 0;
    break;
  case 17:
    leftBoard.speed = 0;
    break;
  case 38:
    rightBoard.speed = 0;
    break;
  case 40:
    rightBoard.speed = 0;
    break;
  }
});
