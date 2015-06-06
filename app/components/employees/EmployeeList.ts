/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="./EmployeePage.ts" />
import {Component, View, bootstrap} from 'angular2/angular2'
import {Employee} from './employee'
import {EmployeeForm} from './EmployeeForm'

@Component({
    selector: 'employee-list',
    //componentServices: [EmployeeForm]
    appInjector: [EmployeeForm]
})
@View({
    templateUrl: 'app/components/employees/EmployeeList.html',
    directives: [/* For */]
})

// Component controller
export class EmployeeList {

    public employees:Employee[];
    public age:number = 55;

    constructor(employeeForm:EmployeeForm) {
        console.log("Employee list has been constructed.");
        this.employees = [
            new Employee("Howard", "Pinsley"),
            new Employee("David", "Pinsley"),
            new Employee("Gia","Bloss"),
            new Employee("Evangeline","Nally"),
            new Employee("Edna","Gagne"),
            new Employee("Ora","Sum"),
            new Employee("Fawn","Milo"),
            new Employee("Ji","Haithcock"),
            new Employee("Margorie","Paradise"),
            new Employee("Genaro","Sheehan"),
            new Employee("Adele","Devitt"),
            new Employee("Sharilyn","Gerald")
        ];

        setTimeout(()=>{
            this.employees[0].first = "Lauren";
        }, 2000);
    }
    
    employeeClick(emp:Employee) {
        alert('You clicked an employee: ' + emp.fullName);
    }
}

