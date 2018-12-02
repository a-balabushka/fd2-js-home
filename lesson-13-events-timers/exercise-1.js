'use strict';

var clockSize = 400; // размер часов
var dotSize = 20; // размер центрального кружка
var clockNumSize = 40; // размер цифр

(function createWatch() {
  var clockBg = document.getElementById('clockBg'); // контейнер часов
  clockBg.style.cssText =
    'background-color: grey;' +
    'border-radius: 50%;' +
    'border: 2px solid gold';
  clockBg.style.width = clockBg.style.height = clockSize + 'px';
  createHourNumber();
  clockBg.appendChild(createHourNumber());
  clockBg.appendChild(createArrow(150, 'arrowSeconds', 'red'));
  clockBg.appendChild(createArrow(150, 'arrowMinutes', 'gold'));
  clockBg.appendChild(createArrow(125, 'arrowHours', 'gold'));
  clockBg.appendChild(createCenterDot());
  clockBg.appendChild(createClockNum());
})();

function createHourNumber() {
  var delta = Math.PI / 6;
  var angle = 0;
  var hourNum = document.createDocumentFragment();
  for (var i = 0; i < 12; i++) {
    var numBg = document.createElement('div');
    numBg.style.cssText = 'position: absolute;' +
      'background-color: gold;' +
      'border-radius: 50%;' +
      'text-align: center;' +
      'font-size: 35px';
    numBg.textContent = i + 1;
    numBg.style.width = numBg.style.height = 2 * dotSize + 'px';
    numBg.style.left = 190 + 170 * Math.cos(angle - Math.PI / 3) + 'px';
    numBg.style.top = 190 + 170 * Math.sin(angle - Math.PI / 3) + 'px';
    angle += delta;
    hourNum.appendChild(numBg);
  }
  return hourNum;
}

function createArrow(arrowWidth, arrowType, arrowColor) {
  var arrow = document.createElement('div');
  arrow.id = arrowType;
  arrow.style.cssText = 'position: absolute;' +
    'background-color: gold;' +
    'transform-origin: 5px 5px;' +
    'left: 205px;' +
    'top: 205px';
  arrow.style.width = arrowWidth + 'px';
  arrow.style.height = (dotSize / 2) + 'px';
  arrow.style.backgroundColor = arrowColor;
  return arrow;
}

function createCenterDot() {
  var center = document.createElement('div');
  center.style.cssText = 'position: absolute;' +
    'background-color: black;' +
    'border-radius: 50%';
  center.style.top = center.style.left = (clockSize / 2) + 'px';
  return center;
}

function createClockNum() {
  var clockNum = document.createElement('div');
  clockNum.id = 'clockNum';
  clockNum.style.cssText = 'position: absolute;' +
    'font-size: 25px;' +
    'color: gold;' +
    'text-align: center;' +
    'left: 170px;' +
    'top: 120px';
  clockNum.style.width = clockNumSize + 'px';
  return clockNum;
}

setInterval(clockMovement, 1000);

function clockMovement() {
  var CurrTime = new Date();
  function arrowRotate() {
    var hoursDeg = 30 * (CurrTime.getHours() + (1 / 60) * CurrTime.getMinutes()) - 90; // определяем по времени где должна быть стрелка часов
    var minutesDeg = 6 * (CurrTime.getMinutes() + (1 / 60) * CurrTime.getSeconds()) - 90; // определяем по времени где должна быть стрелка минут
    var secondsDeg = 6 * CurrTime.getSeconds() - 6 - 90; // определяем по времени где должна быть стрелка секунд
    secondsDeg += 6; // сдвиг стрелки секунд на 6 градусов
    arrowSeconds.style.transform = 'rotate(' + secondsDeg + 'deg)';
    minutesDeg += 6 * (1 / 60); // сдвиг стрелки минут на 6 * (1 / 60) градусов
    arrowMinutes.style.transform = 'rotate(' + minutesDeg + 'deg)';
    hoursDeg += 6 * (1 / 360); // сдвиг стрелки часов на 6 * (1 / 360) градусов
    arrowHours.style.transform = 'rotate(' + hoursDeg + 'deg)';
  }

  function updateTime() {
    var CurrTimeStr = formatDateTime(CurrTime);
    clockNum.innerHTML = CurrTimeStr;
  }

  function formatDateTime(DT) {
    var Hours = DT.getHours();
    var Minutes = DT.getMinutes();
    var Seconds = DT.getSeconds();
    return str0L(Hours, 2) + ':' + str0L(Minutes, 2) + ':' + str0L(Seconds, 2);
  }

  function str0L(Val, Len) {
    var StrVal = Val.toString();
    while (StrVal.length < Len)
      StrVal = '0' + StrVal;
    return StrVal;
  }
  arrowRotate();
  updateTime();
}
