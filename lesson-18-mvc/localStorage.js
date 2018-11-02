'use strict';

function TLocalStorage(nameStorage) {
  var self = this;
  var storage = {};

  self.addValue = function (key, value) {
    storage[key] = value;
  };

  self.getValue = function (key) {
    return storage[key];
  };

  self.deleteValue = function (key) {
    if (key in storage) {
      delete storage[key];
      return true;
    }
    return false;
  };

  self.getKeys = function () {
    return Object.keys(storage);
  };

  self.reset = function () {
    if (window.localStorage.getItem(nameStorage)) {
      storage = JSON.parse(window.localStorage.getItem(nameStorage));
    }
    return storage;
  };

  self.store = function () {
    window.localStorage.setItem(nameStorage, JSON.stringify(storage));
  };
}
