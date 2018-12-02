'use strict';

var container = document.getElementById('container');
var arrImage = container.getElementsByTagName('img');
var DragImage = null;
var DragShiftX = null;
var DragShiftY = null;
var imageIndex = 0;

function imageAttributes() {
  for (var i = arrImage.length - 1; i > -1; i--) {
    var initialLeft = arrImage[i].offsetLeft;
    var initialTop = arrImage[i].offsetTop;
    arrImage[i].style.left = initialLeft + 'px';
    arrImage[i].style.top = initialTop + 'px';
    arrImage[i].style.position = 'absolute';
    arrImage[i].addEventListener('mousedown', Drag_Start, false);
  }
}

function Drag_Start(EO) {
  EO = EO || window.event;
  EO.preventDefault();
  DragImage = EO.target;

  DragShiftX = EO.pageX - DragImage.offsetLeft;
  DragShiftY = EO.pageY - DragImage.offsetTop;
  DragImage.style.cursor = 'grabbing';

  window.addEventListener('mousemove', Drag_Move, false);
  window.addEventListener('mouseup', Drag_Stop, false);
  window.addEventListener('mouseout', Drag_Stop, false);
}

function Drag_Move(EO) {
  EO = EO || window.event;
  EO.preventDefault();
  DragImage = EO.target;

  DragImage.style.zIndex = imageIndex++;
  DragImage.style.left = EO.pageX - DragShiftX + 'px';
  DragImage.style.top = EO.pageY - DragShiftY + 'px';
}

function Drag_Stop(EO) {
  EO = EO || window.event;
  EO.preventDefault();
  DragImage = EO.target;

  DragImage.style.cursor = 'default';
  window.removeEventListener('mousemove', Drag_Move, false);
  window.removeEventListener('mouseup', Drag_Stop, false);
  window.removeEventListener('mouseout', Drag_Stop, false);
}

imageAttributes();