import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap, NgFor} from 'angular2/angular2'
import {List, ListWrapper} from 'angular2/src/facade/collection';
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

    constructor() {
        
        //this.empList = new List();
        //ListWrapper.push(this.empList, new Employee("Evangeline","Nally"));
         
        this.employees = [
            new Employee("Howard", "Pinsley"),
            new Employee("David", "Pinsley"),
            new Employee("Pilar","Pinsley"),
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
    
    addEmployee(emp) {
        this.employees.unshift(emp);
        //ListWrapper.push(this.employees, emp);
        //ListWrapper.push(this.empList, emp);
    }
    
    changeToLauren() {
        this.employees[0].first = "Lauren";
        console.log("The first employee is now " + this.employees[0].fullName);
    }
    
    employeeClick(emp) {
        console.log("You clicked on", emp);
        //this.employeeForm.selectEmployee(emp);
    }
}