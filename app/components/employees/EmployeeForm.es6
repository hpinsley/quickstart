import {InjectAnnotation as Inject, ComponentAnnotation as Component, ViewAnnotation as View, FormControlDirective, Control, FormModelDirective} from 'angular2/angular2'
import {FormBuilder, Validators, formDirectives, ControlGroup} from 'angular2/forms';

import {Employee} from './employee'
import {EmployeePage} from './EmployeePage'

@Component({
    selector: 'employee-form',
    appInjector: [FormBuilder]
})
@View({
    templateUrl: 'app/components/employees/EmployeeForm.html',
    directives: [formDirectives]
})

export class EmployeeForm {
    
    constructor(@Inject(FormBuilder) builder) {

        console.log('Constructed the employee form');
        this.employee = new Employee("dummy", "fake");
 
        this.loginForm = builder.group({
            firstName: ["", Validators.required],
            lastName: ["", Validators.required]
      }); 

      //this.loginForm.controls.firstName.updateValue('Howard');
      
      this.loginForm.controls.lastName.registerOnChange(val => {
        alert("onChange was invoked for last name with value: " + val);
      });
    }
    
    submitForm() {
        alert("Last name on form is: " + this.loginForm.controls.lastName.value);
    }
    selectEmployee(emp) {
        console.log("In Employee form.  Setting current employee to " + emp.fullName);
        this.employee = emp;
    }
        
    updateLastName() {
        this.loginForm.controls.lastName.updateValue('Jones');
    }
}