/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="./EmployeePage.ts" />

import {Component, View, bootstrap, ON_PUSH, CHECK_ALWAYS} from 'angular2/angular2'


import {Employee} from './employee'
import {EmployeePage} from './EmployeePage'

@Component({
    selector: 'employee-form',
    properties: {
        employee: 'employee'
    }
    //,changeDetecton:CHECK_ALWAYS    
    //injectables: [EmployeePage]
})
@View({
    templateUrl: 'app/components/employees/EmployeeForm.html'
})
// Component controller
export class EmployeeForm {

    employee: Employee;
    
    constructor() {
        console.log('Constructed the employee form');
        this.employee = new Employee("dummy", "fake");
    }
    
    selectEmployee(emp:Employee) {
        console.log("In Employee form.  Setting current employee to " + emp.fullName);
        this.employee = emp;
    }
    
    updateEmp() {
        this.employee.last = "happy";
        console.log('Set the last name to happy.');
    }
}

