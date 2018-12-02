'use strict';

function TLocalStorage(nameStorage) {
  var self = this;
  var name = nameStorage;
  var storage = JSON.parse(localStorage.getItem(name)) || {};

  self.addValue = function (key, value) {
    storage[key] = value;
    localStorage.setItem(name, JSON.stringify(storage));
  };

  self.getValue = function (key) {
    return storage[key];
  };

  self.deleteValue = function (key) {
    if (key in storage) {
      delete storage[key];
      localStorage.setItem(name, JSON.stringify(storage));
      return true;
    }
    return false;
  };

  self.getKeys = function () {
    return Object.keys(storage);
  };

  self.reset = function () {
    if (window.localStorage.getItem(name)) {
      storage = JSON.parse(window.localStorage.getItem(name));
    }
    return storage;
  };
}
