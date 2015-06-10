import {InjectAnnotation as Inject, ComponentAnnotation as Component, ViewAnnotation as View, FormControlDirective, Control, FormModelDirective} from 'angular2/angular2'
import {FormBuilder, Validators, formDirectives, ControlGroup} from 'angular2/forms';

import {Employee} from './employee'
import {EmployeePage} from './EmployeePage'

@Component({
    selector: 'employee-form',
    directives: [formDirectives],
    appInjector: [FormBuilder]
})
@View({
    templateUrl: 'app/components/employees/EmployeeForm.html'
})
// Component controller
export class EmployeeForm {
    
    constructor(@Inject(FormBuilder) builder) {
        console.log('Constructed the employee form');
        this.employee = new Employee("dummy", "fake");
 
        this.loginForm = builder.group({
            login: ["", Validators.required],
 
        passwordRetry: builder.group({
          password: ["", Validators.required],
          passwordConfirmation: ["", Validators.required]
        })
      }); 

    }
    
    selectEmployee(emp) {
        console.log("In Employee form.  Setting current employee to " + emp.fullName);
        this.employee = emp;
    }
        
    onUpdate() {
        console.log("Employee is: " + this.employee.fullName);
        this.lastNameCtl.updateValue("hello there!");
    }
}