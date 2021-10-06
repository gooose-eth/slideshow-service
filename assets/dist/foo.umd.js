(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.FOOO = factory());
})(this, (function () { 'use strict';

  console.log('hello world');

  module.exports = {
    fooo: 'barr'
  };

  var foo = {
    foo: 'bar'
  };

  return foo;

}));
