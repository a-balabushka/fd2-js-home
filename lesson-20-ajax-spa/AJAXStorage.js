'use strict';

function AJAXStorage() {
  var self = this;
  self.storage = {};
  self.password = 'secret';
  var AjaxHandlerScript = 'http://fe.it-academy.by/AjaxStringStorage2.php';

  function refreshStorage() {
    $.ajax(
      {
        url: AjaxHandlerScript,
        type: 'POST',
        data: {f: 'READ', n: 'BalabushkoAS_DRINKS'},
        cache: false,
        success: readReady,
        error: ErrorHandler
      });
  }

  function readReady(ResultH) {
    if (ResultH !== '') {
      self.storage = JSON.parse(ResultH.result);
      console.log('Loaded: ' + ResultH.result);
    }
  }

  function saveStorage() {
    $.ajax(
      {
        url: AjaxHandlerScript,
        type: 'POST',
        data: {
          f: 'LOCKGET', n: 'BalabushkoAS_DRINKS',
          v: JSON.stringify(self.storage), p: self.password
        },
        cache: false,
        success: lockGetReady,
        error: ErrorHandler
      });
  }

  function lockGetReady(ResultH) {
    if (ResultH.error !== undefined) {
      console.log(ResultH.error);
    }
  }

  function updateStorage() {
    $.ajax( {
      url: AjaxHandlerScript,
      type: 'POST',
      data: {
        f: 'UPDATE', n: 'BalabushkoAS_DRINKS',
        v: JSON.stringify(self.storage), p: self.password},
      cache: false,
      success: updateReady,
      error: ErrorHandler
    });
  }

  function updateReady() {
    console.log(self.storage);
  }

  self.addValue = function (key, value) {
    saveStorage();
    self.storage[key] = value;
    updateStorage();
  };

  self.getValue = function (key) {
    return self.storage[key];
  };

  self.deleteValue = function (key) {
    saveStorage();
    if (key in self.storage) {
      delete self.storage[key];
      updateStorage();
      return true;
    }
    return false;
  };

  self.getKeys = function () {
    return Object.keys(self.storage);
  };

  function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
    console.log(StatusStr + ' ' + ErrorStr);
  }

  refreshStorage();
}