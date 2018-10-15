'use strict';

var clockBg = document.getElementById('clockBg'); // контейнер часов
clockBg.style.cssText = 'width: 400px;' +
  'height: 400px;' +
  'background-color: grey;' +
  'border-radius: 50%;' +
  'border: 2px solid gold';

var delta = Math.PI / 6;
var angle = 0;
for (var i = 0; i < 12; i++) {
  var numBg = document.createElement('div'); // номер часа в кружке
  numBg.style.cssText = 'position: absolute;' +
    'width: 40px;' +
    'height: 40px;' +
    'background-color: gold;' +
    'border-radius: 50%;' +
    'text-align: center;' +
    'font-size: 35px';
  numBg.textContent = i + 1;
  numBg.style.left = 190 + 170 * Math.cos(angle - Math.PI / 3) + 'px';
  numBg.style.top = 190 + 170 * Math.sin(angle - Math.PI / 3) + 'px';
  angle += delta;
  clockBg.appendChild(numBg);
}

var center = document.createElement('div'); // центральный черный кружок
center.style.cssText = 'position: absolute;' +
  'width: 20px;' +
  'height: 20px;' +
  'background-color: black;' +
  'border-radius: 50%;' +
  'top: 200px;' +
  'left: 200px';
clockBg.appendChild(center);

var arrowHours = document.createElement('div'); // стрелка чаосв
var arrowMinutes = document.createElement('div'); // стрелка минут
var arrowSeconds = document.createElement('div'); // стрелка секунд

arrowHours = clockBg.appendChild(arrowHours);
arrowMinutes = clockBg.appendChild(arrowMinutes);
arrowSeconds = clockBg.appendChild(arrowSeconds);

var arrArrows = [arrowHours, arrowMinutes, arrowSeconds]; // массив стрелок
for (var j = 0; j < arrArrows.length; j++) {
  arrArrows[j].style.cssText = 'position: absolute;' +
    'width: 150px;' +
    'height: 10px;' +
    'background-color: gold;' +
    'transform-origin: 5px 5px;' +
    'left: 205px;' +
    'top: 205px';
}

arrowHours.style.width = '125px';
arrowSeconds.style.backgroundColor = 'red';

var clockNum = document.createElement('div'); // табло времени
clockNum.style.cssText = 'position: absolute;' +
  'width: 40px;' +
  'font-size: 25px;' +
  'color: gold;' +
  'text-align: center;' +
  'left: 170px;' +
  'top: 120px';
clockBg.appendChild(clockNum);

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
