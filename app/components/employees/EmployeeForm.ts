import {Component, View, Inject} from 'angular2/angular2'
import {formDirectives, Control, Validators, ControlGroup, FormBuilder} from 'angular2/angular2'
import {Employee} from './employee'
import * as ang from 'angular2/angular2';

@Component({
    selector: 'employee-form',
    appInjector: [FormBuilder]
})
@View({
    templateUrl: 'app/components/employees/EmployeeForm.html',
    directives: [formDirectives]
})

export class EmployeeForm {

    empform: ControlGroup;
        
    constructor(fb:FormBuilder) {
        
        this.empform = fb.group({
               last : ["Jones", Validators.required]
        });
 
        console.log('Constructed the employee form');
    }
    onSubmit() {
        console.log("Form submitted");
        return true;
    }
    
    onKeyUp(ev) {
        console.log(ev);
    }           
}