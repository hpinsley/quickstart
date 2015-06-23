import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap} from 'angular2/angular2'

import {Employee} from './employee'
import {EmployeeForm} from './EmployeeForm'
import {EmployeeList} from './EmployeeList'

@Component({
    selector: 'employee-page'
})
@View({
    templateUrl: 'app/components/employees/EmployeePage.html',
    directives: [EmployeeForm, EmployeeList]
})

export class EmployeePage {
    
    constructor() {
        this.selectedEmployee = new Employee("","");
        this.selectedEmployee.firstName = "Page first";
        this.selectedEmployee.lastName = "Page last";
        this.age = 10;
    }
    
    selectEmployee(emp) {
        console.log("(From employee page): Employee selected:", emp);
        this.selectedEmployee = emp;
        this.age += 1;
        console.log("Age is now ", this.age);
    }
}