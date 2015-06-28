import {Component, View, bootstrap, NgFor} from 'angular2/angular2'
import {Employee} from './employee'

@Component({
    selector: 'employee-list'
})
@View({
    templateUrl: 'app/components/employees/EmployeeList.html',
    directives: [NgFor]
})

// Component controller
export class EmployeeList {

    public employees:Employee[];
    public age:number = 55;

    constructor() {
        console.log("Employee list has been constructed.");
        
        this.employees = [
            new Employee("Howard", "Pinsley"),
            new Employee("David", "Pinsley"),
            new Employee("Pilar","Pinsley"),
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
    }
    changeToLauren() {
        this.employees[0].first = "Lauren";
        console.log("The first employee is now " + this.employees[0].fullName);
    }
    
    employeeClick(emp:Employee) {
        console.log("You clicked on", emp);
        //this.employeeForm.selectEmployee(emp);
    }
}

