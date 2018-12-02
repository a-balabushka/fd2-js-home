'use strict';
const baseCenter = 200;
const baseRadius = 150; // радиус циферблата
const numbersBaseRadius = 130; // радиус оси цифр циферблата
const dotSize = 5; // размер точки в центре часов
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

setInterval(tickTimer, 1000);

// UI

function createWatch() {
  context.beginPath();
  context.strokeStyle = 'black';
  context.fillStyle = '#FFCB09';
  context.lineWidth = 5;
  context.arc(baseCenter, baseCenter, baseRadius, 0, Math.PI * 2, false);
  context.stroke();
  context.fill();

  createClockFace();
  createDecorativeDot(dotSize);
}

function createClockFace() {
  for (let number = 1; number <= 12; number++) {
    let angle = number * 30 / 180 * Math.PI;
    let x = baseCenter + Math.round(Math.sin(angle) * numbersBaseRadius);
    let y = baseCenter - Math.round(Math.cos(angle) * numbersBaseRadius) + 5;
    createHour(x, y, number);
  }
}

function createHour(circleX, circleY, number) {
  context.beginPath();
  context.fillStyle = 'black';
  context.fillText(number, circleX, circleY);
  context.font = 'normal 15px Verdana';
  context.textAlign = 'center';
  context.fill;
}

function createDigitalWatch(digitalTime) {
  const x = baseCenter;
  const y = baseCenter + 50;
  context.beginPath();
  context.textAlign = 'center';
  context.fillText(digitalTime, x, y);
}

function createArrow(arrowWidth, arrowLength, degree, color) {
  context.beginPath();
  context.strokeStyle = color;
  context.lineWidth = arrowWidth;
  context.moveTo(baseCenter, baseCenter);
  context.lineTo(baseCenter + arrowLength * Math.cos(Math.PI / 2 - degree * (Math.PI / 180)), baseCenter - arrowLength * Math.sin(Math.PI / 2 - degree * (Math.PI / 180)));
  context.stroke();
  context.closePath();
}


function createDecorativeDot(size) {
  let dot = canvas.getContext('2d');
  dot.beginPath();
  dot.fillStyle = 'black';
  dot.arc(baseCenter, baseCenter, size, 0, Math.PI * 2, false);
  dot.fill();
}

// Magic

function tickTimer(){
  let now = new Date();
  let thisSecond = now.getSeconds();
  let thisMinute = now.getMinutes();
  let thisHour   = now.getHours();
  createWatch();
  let time = thisHour + ':' + thisMinute + ':' + thisSecond;
  updateWatch(thisHour, thisMinute, thisSecond);
  createDigitalWatch(time);

}

function updateWatch(hour, minute, second) {
  let thisSecondRotate = (second / 60) * 360;
  let thisMinuteRotate = (minute) / 60 * 360;
  let thisHourRotate   = (hour + minute / 60) / 12 * 360;
  createArrow(6, 100, thisHourRotate, 'black');
  createArrow(4, 110, thisMinuteRotate, 'black');
  createArrow(2, 110, thisSecondRotate, 'red');
}