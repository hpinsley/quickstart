"use strict";
var $__angular2_47_angular2__,
    $__employee__;
var $__0 = ($__angular2_47_angular2__ = require("angular2/angular2"), $__angular2_47_angular2__ && $__angular2_47_angular2__.__esModule && $__angular2_47_angular2__ || {default: $__angular2_47_angular2__}),
    Component = $__0.ComponentAnnotation,
    View = $__0.ViewAnnotation,
    bootstrap = $__0.bootstrap,
    NgFor = $__0.NgFor;
var Employee = ($__employee__ = require("./employee"), $__employee__ && $__employee__.__esModule && $__employee__ || {default: $__employee__}).Employee;
var EmployeeList = (function() {
  function EmployeeList() {
    console.log("Employee list has been constructed.");
    this.employees = [new Employee("Howard", "Pinsley"), new Employee("David", "Pinsley"), new Employee("Pilar", "Pinsley"), new Employee("Evangeline", "Nally"), new Employee("Edna", "Gagne"), new Employee("Ora", "Sum"), new Employee("Fawn", "Milo"), new Employee("Ji", "Haithcock"), new Employee("Margorie", "Paradise"), new Employee("Genaro", "Sheehan"), new Employee("Adele", "Devitt"), new Employee("Sharilyn", "Gerald")];
  }
  return ($traceurRuntime.createClass)(EmployeeList, {
    addEmployee: function(emp) {
      this.employees.push(emp);
    },
    changeToLauren: function() {
      this.employees[0].first = "Lauren";
      console.log("The first employee is now " + this.employees[0].fullName);
    },
    employeeClick: function(emp) {
      console.log("You clicked on", emp);
    }
  }, {});
}());
Object.defineProperty(EmployeeList, "annotations", {get: function() {
    return [new Component({selector: 'employee-list'}), new View({
      templateUrl: 'app/components/employees/EmployeeList.html',
      directives: [NgFor]
    })];
  }});
Object.defineProperties(module.exports, {
  EmployeeList: {get: function() {
      return EmployeeList;
    }},
  __esModule: {value: true}
});
