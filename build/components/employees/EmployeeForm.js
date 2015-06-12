"use strict";
var $__angular2_47_angular2__,
    $__angular2_47_forms__,
    $__employee__,
    $__EmployeePage__,
    $__EmployeeList__;
var $__0 = ($__angular2_47_angular2__ = require("angular2/angular2"), $__angular2_47_angular2__ && $__angular2_47_angular2__.__esModule && $__angular2_47_angular2__ || {default: $__angular2_47_angular2__}),
    Parent = $__0.ParentAnnotation,
    Inject = $__0.InjectAnnotation,
    Component = $__0.ComponentAnnotation,
    View = $__0.ViewAnnotation,
    FormControlDirective = $__0.FormControlDirective,
    Control = $__0.Control,
    FormModelDirective = $__0.FormModelDirective;
var $__1 = ($__angular2_47_forms__ = require("angular2/forms"), $__angular2_47_forms__ && $__angular2_47_forms__.__esModule && $__angular2_47_forms__ || {default: $__angular2_47_forms__}),
    FormBuilder = $__1.FormBuilder,
    Validators = $__1.Validators,
    formDirectives = $__1.formDirectives,
    ControlGroup = $__1.ControlGroup;
var Employee = ($__employee__ = require("./employee"), $__employee__ && $__employee__.__esModule && $__employee__ || {default: $__employee__}).Employee;
var EmployeePage = ($__EmployeePage__ = require("./EmployeePage"), $__EmployeePage__ && $__EmployeePage__.__esModule && $__EmployeePage__ || {default: $__EmployeePage__}).EmployeePage;
var EmployeeList = ($__EmployeeList__ = require("./EmployeeList"), $__EmployeeList__ && $__EmployeeList__.__esModule && $__EmployeeList__ || {default: $__EmployeeList__}).EmployeeList;
var EmployeeForm = (function() {
  function EmployeeForm(builder, empList) {
    this.employeeList = empList;
    this.loginForm = builder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required]
    });
    this.loginForm.controls.lastName.registerOnChange((function(val) {
      alert("onChange was invoked for last name with value: " + val);
    }));
  }
  return ($traceurRuntime.createClass)(EmployeeForm, {addEmployee: function() {
      if (!this.loginForm.valid) {
        alert('Please specify all the input fields.');
      } else {
        var newEmployee = new Employee(this.loginForm.controls.firstName.value, this.loginForm.controls.lastName.value);
        this.employeeList.addEmployee(newEmployee);
      }
    }}, {});
}());
Object.defineProperty(EmployeeForm, "annotations", {get: function() {
    return [new Component({
      selector: 'employee-form',
      appInjector: [FormBuilder, EmployeeList]
    }), new View({
      templateUrl: 'app/components/employees/EmployeeForm.html',
      directives: [formDirectives]
    })];
  }});
Object.defineProperty(EmployeeForm, "parameters", {get: function() {
    return [[new Inject(FormBuilder)], [new Inject(EmployeeList)]];
  }});
Object.defineProperties(module.exports, {
  EmployeeForm: {get: function() {
      return EmployeeForm;
    }},
  __esModule: {value: true}
});
