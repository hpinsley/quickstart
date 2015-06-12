"use strict";
var $__angular2_47_angular2__,
    $__components_47_employees_47_EmployeePage__;
var $__0 = ($__angular2_47_angular2__ = require("angular2/angular2"), $__angular2_47_angular2__ && $__angular2_47_angular2__.__esModule && $__angular2_47_angular2__ || {default: $__angular2_47_angular2__}),
    Component = $__0.ComponentAnnotation,
    View = $__0.ViewAnnotation,
    bootstrap = $__0.bootstrap;
var EmployeePage = ($__components_47_employees_47_EmployeePage__ = require("./components/employees/EmployeePage"), $__components_47_employees_47_EmployeePage__ && $__components_47_employees_47_EmployeePage__.__esModule && $__components_47_employees_47_EmployeePage__ || {default: $__components_47_employees_47_EmployeePage__}).EmployeePage;
var MyAppComponent = (function() {
  function MyAppComponent() {
    console.log("MyAppComponent has been constructed");
  }
  return ($traceurRuntime.createClass)(MyAppComponent, {}, {});
}());
Object.defineProperty(MyAppComponent, "annotations", {get: function() {
    return [new Component({selector: 'my-app'}), new View({
      templateUrl: 'app/app.html',
      directives: [EmployeePage]
    })];
  }});
bootstrap(MyAppComponent);
Object.defineProperties(module.exports, {
  MyAppComponent: {get: function() {
      return MyAppComponent;
    }},
  __esModule: {value: true}
});
