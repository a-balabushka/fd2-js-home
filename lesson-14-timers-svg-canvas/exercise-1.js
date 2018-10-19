'use strict';
const baseRadius = 300; // радиус циферблата
const numbersBaseRadius = baseRadius / 1.5; // радиус оси цифр циферблата
const circleRadius = 20; // радиус кружков с цифрами
const dotSize = 10; // размер точки в центре часов
const wrapper = document.getElementById('wrapper');
const svg = document.getElementById('clock');

wrapper.appendChild(createWatch());
setInterval(tickTimer, 1000);

// UI

function createWatch() {
  let base = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  base.setAttribute('cx', baseRadius.toString());
  base.setAttribute('cy', baseRadius.toString());
  base.setAttribute('r', '250');
  base.setAttribute('stroke', '#36A9E1');
  base.setAttribute('stroke-width', '10');
  base.setAttribute('fill', 'white');
  svg.appendChild(base);
  base.appendChild(createClockFace());
  createDigitalWatch();
  svg.appendChild(createArrow('hours', 6, 'black', 160));
  svg.appendChild(createArrow('minutes', 4, 'black', 140));
  svg.appendChild(createArrow('seconds', 2, 'red', 120));
  svg.appendChild(createDecorativeDot(dotSize));
  return svg;
}

function createClockFace() {
  let clockFace = document.createDocumentFragment();
  for (let number = 1; number <= 12; number++) {
    let angle = number * 30 / 180 * Math.PI;
    let x = baseRadius + Math.round(Math.sin(angle) * numbersBaseRadius);
    let y = baseRadius - Math.round(Math.cos(angle) * numbersBaseRadius);
    svg.appendChild(createHourCircle(x, y));
    svg.appendChild(createHourNumber(x, y, number));
  }
  return clockFace;
}

function createHourCircle(circleX, circleY) {
  let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('r', circleRadius.toString());
  circle.setAttribute('cx', circleX.toString());
  circle.setAttribute('cy', circleY.toString());
  circle.setAttribute('stroke', '#36A9E1');
  circle.setAttribute('fill', 'white');
  return circle;
}

function createHourNumber(circleX, circleY, number) {
  var hourNumber = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  hourNumber.setAttribute('x', circleX.toString());
  hourNumber.setAttribute('y', (circleY + 6).toString());
  hourNumber.setAttribute('font-size', '20');
  hourNumber.setAttribute('text-anchor', 'middle');
  hourNumber.setAttribute('font-family', 'Verdana');
  hourNumber.textContent = number;
  return hourNumber;
}

function createDigitalWatch() {
  let textClock = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  textClock.setAttribute('id', 'digitalWatch');
  textClock.setAttribute('x', baseRadius.toString());
  textClock.setAttribute('y', '200');
  textClock.setAttribute('fill', '#36A9E1');
  textClock.setAttribute('font-size', '20');
  textClock.setAttribute('text-anchor', 'middle');
  svg.appendChild(textClock);
  return textClock;
}

function createArrow(arrowType, arrowWidth, arrowColor, arrowHeight) {
  let arrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  arrow.id = arrowType;
  arrow.setAttribute('x1', baseRadius.toString());
  arrow.setAttribute('y1', baseRadius.toString());
  arrow.setAttribute('x2', baseRadius.toString());
  arrow.setAttribute('y2', arrowHeight.toString());
  arrow.setAttribute('stroke', arrowColor.toString());
  arrow.setAttribute('stroke-width', arrowWidth.toString());
  return arrow;
}

function createDecorativeDot(size) {
  let dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  dot.setAttribute('cx', baseRadius.toString());
  dot.setAttribute('cy', baseRadius.toString());
  dot.setAttribute('r', size);
  svg.appendChild(dot);
  return dot;
}

// Magic

function tickTimer() {
  let now = new Date();
  let thisSecond = now.getSeconds();
  let thisMinute = now.getMinutes();
  let thisHour = now.getHours();
  updateWatch(thisHour, thisMinute, thisSecond);
  updateDigitalWatch(thisHour, thisMinute, thisSecond);
}

function updateWatch(hour, minute, second) {
  let thisSecondRotate = (second / 60) * 360;
  let thisMinuteRotate = (minute) / 60 * 360;
  let thisHourRotate = (hour + minute / 60) / 12 * 360;
  rotateHandle('seconds', thisSecondRotate);
  rotateHandle('minutes', thisMinuteRotate);
  rotateHandle('hours', thisHourRotate);
}

function rotateHandle(handle, degree) {
  let arrow = document.getElementById(handle);
  arrow.setAttribute('transform', `rotate(${degree}, ${baseRadius}, ${baseRadius})`);
}

function updateDigitalWatch(hour, minute, second) {
  const digitalWatch = document.getElementById('digitalWatch');
  digitalWatch.innerHTML = `${addZeroToNumber(hour)}:${addZeroToNumber(minute)}:${addZeroToNumber(second)}`;
}

function addZeroToNumber(currentTime) {
  return (`${currentTime}`.length < 2) ? (`0${currentTime}`) : currentTime;
}