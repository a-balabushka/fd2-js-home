'use strict';

var container = document.getElementById('container');
var arrImage = container.getElementsByTagName('img');
var DragImage = null;
var DragShiftX = null;
var DragShiftY = null;
var imageIndex = 0;

function imageAttributes() {
  for (var i = 0; i < arrImage.length; i++) {
    arrImage[i].style.width = '200px';
    arrImage[i].style.height = '200px';
    arrImage[i].style.position = 'absolute';

    arrImage[i].onmousedown = Drag_Start;
    arrImage[i].onmouseup = Drag_Stop;
  }
}

function Drag_Start(EO) {
  EO = EO || window.event;
  DragImage = EO.target;
  EO.preventDefault();
  DragImage.onmousemove = Drag_Move;
  DragShiftX = EO.pageX - DragImage.offsetLeft;
  DragShiftY = EO.pageY - DragImage.offsetTop;
  DragImage.style.zIndex = imageIndex++;
  DragImage.style.cursor = 'grabbing';

}

function Drag_Move(EO) {
  EO = EO || window.event;
  DragImage = EO.target;
  DragImage.style.left = EO.pageX - DragShiftX + 'px';
  DragImage.style.top = EO.pageY - DragShiftY + 'px';
}

function Drag_Stop(EO) {
  EO = EO || window.event;
  DragImage = EO.target;
  DragImage.onmousemove = null;
  DragImage.style.cursor = 'default';
}

imageAttributes();