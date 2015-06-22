import {Observable, EventEmitter, ComponentAnnotation as Component, ViewAnnotation as View, bootstrap, NgFor} from 'angular2/angular2'
import {Employee} from './employee'

@Component({
    selector: 'employee-list',
    events: ['select']
})
@View({
    templateUrl: 'app/components/employees/EmployeeList.html',
    directives: [NgFor]
})

// Component controller
export class EmployeeList {

    constructor() {
        
        this.select = new EventEmitter();
        
        this.empFilterText = '';
        
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
            new Employee("Steven","Paradise"),
            new Employee("Mark","Sheehan"),
            new Employee("Randy","Devitt"),
            new Employee("Steven","Schmier"),
            new Employee("Mark","Finkelstein"),
            new Employee("Randy","Todd"),
            new Employee("Edna","Smith"),
            new Employee("Ora","Jones"),
            new Employee("Fawn","Bernstein"),
            new Employee("Ji","Chin"),
            new Employee("Genaro","Jones"),
            new Employee("Adele","Brown"),
            new Employee("Steven","Smith"),
            new Employee("Sharilyn","Gerald")
        ];
    }
    
    addEmployee(emp) {
        this.employees.unshift(emp);
    }

    deleteEmployee(emp) {
        var index = this.employees.indexOf(emp);
        console.log('Found ' + emp.fullName + ' at index ' + index);
        this.employees.splice(index, 1);
    }
        
    changeToLauren() {
        this.employees[0].first = "Lauren";
        console.log("The first employee is now " + this.employees[0].fullName);
    }
    
    employeeClick(emp) {
        console.log("You clicked on", emp);
        this.select.next(emp);
    }

    getEmployees() {
        //console.log('getEmployees invoked.  Filter is ' + this.empFilterText);
        if (!this.empFilterText) {       
            return this.employees;
        }
        return this.employees.filter((emp)=>emp.fullName.toLowerCase().indexOf(this.empFilterText.toLowerCase()) >= 0);
    }
            
    onSearchChanged(event) {
        this.empFilterText = event.target.value;
    }
}