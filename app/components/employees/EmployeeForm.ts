/// <reference path="./EmployeePage.ts" />

import {Component, View, ControlGroup, Control, formDirectives} from 'angular2/angular2'


import {Employee} from './employee'
import {EmployeePage} from './EmployeePage'

@Component({
    selector: 'employee-form',
    directives: [formDirectives, ControlGroup, Control]
})
@View({
    templateUrl: 'app/components/employees/EmployeeForm.html'
})
// Component controller
export class EmployeeForm {

    employee: Employee;
    empForm: ControlGroup;
    lastNameCtl: Control;
    
    constructor() {
        console.log('Constructed the employee form');
        this.employee = new Employee("dummy", "fake");
        
        // this.empForm = new ControlGroup();
        // this.lastNameCtl = new Control();
        // this.empForm.addControl('lastNameCtl', this.lastNameCtl);
    }
    
    selectEmployee(emp:Employee) {
        console.log("In Employee form.  Setting current employee to " + emp.fullName);
        this.employee = emp;
    }
        
    onUpdate() {
        console.log("Employee is: " + this.employee.fullName);
    }
}

