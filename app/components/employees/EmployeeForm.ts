import {Component, View, formDirectives} from 'angular2/angular2'
import {Employee} from './employee'

@Component({
    selector: 'employee-form',
    directives: [formDirectives]
})
@View({
    templateUrl: 'app/components/employees/EmployeeForm.html'
})

export class EmployeeForm {

    model: Employee;
    
    constructor() {
        console.log('Constructed the employee form');
        this.model = new Employee("first", "last");        
    }            
}

