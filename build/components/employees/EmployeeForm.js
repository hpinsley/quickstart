"use strict";
var $__angular2_47_angular2__,
    $__employee__,
    $__EmployeePage__;
var $__0 = ($__angular2_47_angular2__ = require("angular2/angular2"), $__angular2_47_angular2__ && $__angular2_47_angular2__.__esModule && $__angular2_47_angular2__ || {default: $__angular2_47_angular2__}),
    Component = $__0.Component,
    View = $__0.View,
    FormControlDirective = $__0.FormControlDirective,
    ControlGroup = $__0.ControlGroup,
    Control = $__0.Control,
    FormModelDirective = $__0.FormModelDirective;
var Employee = ($__employee__ = require("./employee"), $__employee__ && $__employee__.__esModule && $__employee__ || {default: $__employee__}).Employee;
var EmployeePage = ($__EmployeePage__ = require("./EmployeePage"), $__EmployeePage__ && $__EmployeePage__.__esModule && $__EmployeePage__ || {default: $__EmployeePage__}).EmployeePage;
var EmployeeForm = (function() {
  function EmployeeForm() {
    console.log('Constructed the employee form');
    this.employee = new Employee("dummy", "fake");
  }
  return ($traceurRuntime.createClass)(EmployeeForm, {
    selectEmployee: function(emp) {
      console.log("In Employee form.  Setting current employee to " + emp.fullName);
      this.employee = emp;
    },
    onUpdate: function() {
      console.log("Employee is: " + this.employee.fullName);
    }
  }, {});
}());
Object.defineProperty(EmployeeForm, "annotations", {get: function() {
    return [new Component({
      selector: 'employee-form',
      directives: [FormControlDirective, ControlGroup, Control]
    }), new View({templateUrl: 'app/components/employees/EmployeeForm.html'})];
  }});
Object.defineProperties(module.exports, {
  EmployeeForm: {get: function() {
      return EmployeeForm;
    }},
  __esModule: {value: true}
});
