"use strict";
var $__angular2_47_angular2__,
    $__employee__,
    $__EmployeeForm__,
    $__EmployeeList__;
var $__0 = ($__angular2_47_angular2__ = require("angular2/angular2"), $__angular2_47_angular2__ && $__angular2_47_angular2__.__esModule && $__angular2_47_angular2__ || {default: $__angular2_47_angular2__}),
    Component = $__0.Component,
    View = $__0.View,
    bootstrap = $__0.bootstrap;
var Employee = ($__employee__ = require("./employee"), $__employee__ && $__employee__.__esModule && $__employee__ || {default: $__employee__}).Employee;
var EmployeeForm = ($__EmployeeForm__ = require("./EmployeeForm"), $__EmployeeForm__ && $__EmployeeForm__.__esModule && $__EmployeeForm__ || {default: $__EmployeeForm__}).EmployeeForm;
var EmployeeList = ($__EmployeeList__ = require("./EmployeeList"), $__EmployeeList__ && $__EmployeeList__.__esModule && $__EmployeeList__ || {default: $__EmployeeList__}).EmployeeList;
var EmployeePage = (function() {
  function EmployeePage() {
    this.context = {
      selectedEmployee: null,
      title: 'This is from the context'
    };
  }
  return ($traceurRuntime.createClass)(EmployeePage, {buttonClick: function() {
      alert('button click');
    }}, {});
}());
Object.defineProperty(EmployeePage, "annotations", {get: function() {
    return [new Component({selector: 'employee-page'}), new View({
      templateUrl: 'app/components/employees/EmployeePage.html',
      directives: [EmployeeForm, EmployeeList]
    })];
  }});
Object.defineProperties(module.exports, {
  EmployeePage: {get: function() {
      return EmployeePage;
    }},
  __esModule: {value: true}
});
