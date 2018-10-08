'use strict';

(function () {
  var mainForm = document.forms.mainForm;
  var formDev = [
    {label: 'Разработчики: ', kind: 'longtext', width: '500px', name: 'developers'},
    {label: 'Название сайта: ', kind: 'longtext', width: '500px', name: 'sitename'},
    {label: 'URL сайта: ', kind: 'longtext', width: '500px', name: 'siteurl'},
    {label: 'Дата запуска сайта: ', kind: 'number', width: '150px', name: 'date'},
    {label: 'Посетителей в сутки: ', kind: 'number', width: '150px', name: 'visitors'},
    {label: 'Email для связи: ', kind: 'shorttext', width: '250px', name: 'email'},
    {
      label: 'Рубрика каталога: ',
      kind: 'combo',
      name: 'division',
      variants: [{text: 'Здоровье', value: '1'}, {text: 'Домашний уют', value: '2'}, {text: 'Бытовая техника', value: '3'}]
    },
    {
      label: 'Размещение: ',
      kind: 'radio',
      name: 'payment',
      variants: [{text: 'Бесплатное', value: '1'}, {text: 'Платное', value: '2'}, {text: 'VIP', value: '3'}]
    },
    {label: 'Разрешить отзывы: ', kind: 'check', name: 'votes'},
    {label: 'Описание сайта: ', kind: 'memo', height: '150px', width: '650px', name: 'description'},
    {label: 'Опубликовать: ', kind: 'submit'}
  ];

  function createFormElement(form, arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].kind !== 'submit') {
        createLabel(arr[i]);
      }

      if (arr[i].kind === 'longtext' || arr[i].kind === 'shorttext' || arr[i].kind === 'number') {
        createInput(arr[i]);
      } else if (arr[i].kind === 'combo') {
        createCombo(arr[i]);
      } else if (arr[i].kind === 'radio') {
        createRadio(arr[i]);
      } else if (arr[i].kind === 'check') {
        createCheck(arr[i]);
      } else if (arr[i].kind === 'memo') {
        createText(arr[i]);
      } else if (arr[i].kind === 'submit') {
        createSubmit(arr[i]);
      }
      createBR();
    }
  }

  function createLabel(item) {
    var newLabel = document.createElement('label');
    newLabel.innerHTML = item.label;
    newLabel.style.width = '150px';
    newLabel.style.display = 'inline-block';
    mainForm.appendChild(newLabel);
  }

  function createInput(item) {
    var newInput = document.createElement('input');
    newInput.type = item.kind;
    newInput.name = item.name;
    newInput.style.width = item.width;
    mainForm.appendChild(newInput);
  }

  function createCombo(item) {
    var newCombo = document.createElement('select');
    newCombo.name = item.name;
    for (var j = 0; j < item.variants.length; j++) {
      var option = document.createElement('option');
      option.text = item.variants[j].text;
      option.value = item.variants[j].value;
      newCombo.add(option);
    }
    mainForm.appendChild(newCombo);
  }

  function createRadio(item) {
    for (var j = 0; j < item.variants.length; j++) {
      var newRadio = document.createElement('input');
      newRadio.type = 'radio';
      newRadio.name = item.name;
      newRadio.value = item.variants[j].value;

      var label = document.createElement('span');
      label.innerHTML = item.variants[j].text;

      mainForm.appendChild(newRadio);
      mainForm.appendChild(label);
    }
  }

  function createCheck(item) {
    var newCheck = document.createElement('input');
    newCheck.type = 'checkbox';
    newCheck.name = item.name;
    mainForm.appendChild(newCheck);
  }

  function createText(item) {
    createBR();
    var newText = document.createElement('textarea');
    newText.name = item.name;
    newText.style.width = item.width;
    newText.style.height = item.height;
    mainForm.appendChild(newText);
  }

  function createSubmit(item) {
    var newSubmit = document.createElement('input');
    newSubmit.type = 'submit';
    newSubmit.name = item.name;
    newSubmit.value = item.label;
    mainForm.appendChild(newSubmit);
  }

  function createBR() {
    var BR = document.createElement('br');
    mainForm.appendChild(BR);
  }

  createFormElement(mainForm, formDev);
})();