import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap, NgFor} from 'angular2/angular2'
import {Employee} from './employee'
import {AutoTable} from '../directives/AutoTable'

@Component({
    selector: 'employee-list'
})
@View({
    templateUrl: 'app/components/employees/EmployeeList.html',
    directives: [NgFor, AutoTable]
})

// Component controller
export class EmployeeList {

    constructor() {
        
        this.empFilterText = '';
        this.dataTableApplied = false;
        
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
        //this.employeeForm.selectEmployee(emp);
    }

    getEmployees() {
        //console.log('getEmployees invoked.  Filter is ' + this.empFilterText);
        if (!this.empFilterText) {       
            return this.employees;
        }
        return this.employees.filter((emp)=>emp.fullName.toLowerCase().indexOf(this.empFilterText.toLowerCase()) >= 0);
    }
    
    empFilter(emp) {
        console.log('empFilter invoked with ', emp);
        return true;
    }
        
    onSearchChanged(event) {
        var value = event.target.value;
        //console.log(value);
        this.empFilterText = value;
    }
}