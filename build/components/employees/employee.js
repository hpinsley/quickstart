"use strict";
var Employee = (function() {
  function Employee(first, last) {
    this.first = first;
    this.last = last;
  }
  return ($traceurRuntime.createClass)(Employee, {get fullName() {
      return this.first + " " + this.last;
    }}, {});
}());
Object.defineProperties(module.exports, {
  Employee: {get: function() {
      return Employee;
    }},
  __esModule: {value: true}
});
