"use strict";
var $__angular2_47_angular2__,
    $__angular2_47_forms__,
    $__employee__,
    $__EmployeePage__;
var $__0 = ($__angular2_47_angular2__ = require("angular2/angular2"), $__angular2_47_angular2__ && $__angular2_47_angular2__.__esModule && $__angular2_47_angular2__ || {default: $__angular2_47_angular2__}),
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
var EmployeeForm = (function() {
  function EmployeeForm(builder) {
    console.log('Constructed the employee form');
    this.employee = new Employee("dummy", "fake");
    this.loginForm = builder.group({
      login: ["", Validators.required],
      passwordRetry: builder.group({
        password: ["", Validators.required],
        passwordConfirmation: ["", Validators.required]
      })
    });
  }
  return ($traceurRuntime.createClass)(EmployeeForm, {
    selectEmployee: function(emp) {
      console.log("In Employee form.  Setting current employee to " + emp.fullName);
      this.employee = emp;
    },
    onUpdate: function() {
      console.log("Employee is: " + this.employee.fullName);
      this.lastNameCtl.updateValue("hello there!");
    }
  }, {});
}());
Object.defineProperty(EmployeeForm, "annotations", {get: function() {
    return [new Component({
      selector: 'employee-form',
      directives: [formDirectives],
      appInjector: [FormBuilder]
    }), new View({templateUrl: 'app/components/employees/EmployeeForm.html'})];
  }});
Object.defineProperty(EmployeeForm, "parameters", {get: function() {
    return [[new Inject(FormBuilder)]];
  }});
Object.defineProperties(module.exports, {
  EmployeeForm: {get: function() {
      return EmployeeForm;
    }},
  __esModule: {value: true}
});
