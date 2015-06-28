import {Component, View, Inject} from 'angular2/angular2'
import {formDirectives, Control, Validators, ControlGroup, FormBuilder} from 'angular2/angular2'
import {Employee} from './employee'
import * as ang from 'angular2/angular2';

@Component({
    selector: 'employee-form',
    directives: [formDirectives],
    appInjector: [FormBuilder]
})
@View({
    templateUrl: 'app/components/employees/EmployeeForm.html'
})

export class EmployeeForm {

    model: Employee;
    empform: ControlGroup;
    last: Control;
    cx: number;
        
    constructor(fb:FormBuilder) {
        
        // this.empform = fb.group({
        //       "last": ["Hello", Validators.required]
        // });
 
        this.last = new Control();

        console.log('Constructed the employee form');
        this.model = new Employee("first", "last");
        this.cx = 200;        
    }
    onSubmit() {
        console.log("Form submitted");
        return true;
    }
    
    onKeyUp(ev) {
        console.log(ev);
    }           
}