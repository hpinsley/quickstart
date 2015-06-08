"use strict";
var $__angular2_47_angular2__,
    $__components_47_employees_47_EmployeePage__;
var $__0 = ($__angular2_47_angular2__ = require("angular2/angular2"), $__angular2_47_angular2__ && $__angular2_47_angular2__.__esModule && $__angular2_47_angular2__ || {default: $__angular2_47_angular2__}),
    Component = $__0.Component,
    View = $__0.View,
    bootstrap = $__0.bootstrap;
var EmployeePage = ($__components_47_employees_47_EmployeePage__ = require("components/employees/EmployeePage"), $__components_47_employees_47_EmployeePage__ && $__components_47_employees_47_EmployeePage__.__esModule && $__components_47_employees_47_EmployeePage__ || {default: $__components_47_employees_47_EmployeePage__}).EmployeePage;
var MyAppComponent = (function() {
  function MyAppComponent() {
    var $__2 = this;
    console.log("MyAppComponent has been constructed");
    this.name = 'Howard';
    setTimeout((function() {
      $__2.name = 'David';
      console.log('Name is now ' + $__2.name);
    }), 2000);
  }
  return ($traceurRuntime.createClass)(MyAppComponent, {}, {});
}());
Object.defineProperty(MyAppComponent, "annotations", {get: function() {
    return [new Component({selector: 'my-app'}), new View({
      templateUrl: 'scripts/app.html',
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
