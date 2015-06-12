import {ParentAnnotation as Parent, InjectAnnotation as Inject, ComponentAnnotation as Component, ViewAnnotation as View, FormControlDirective, Control, FormModelDirective} from 'angular2/angular2'
import {FormBuilder, Validators, formDirectives, ControlGroup} from 'angular2/forms';

import {Employee} from './employee'
import {EmployeePage} from './EmployeePage'
import {EmployeeList} from './EmployeeList'

@Component({
    selector: 'employee-form',
    appInjector: [FormBuilder, EmployeeList]
})
@View({
    templateUrl: 'app/components/employees/EmployeeForm.html',
    directives: [formDirectives]
})

export class EmployeeForm {
    
    constructor(@Inject(FormBuilder) builder) {
        //this.employeeList = empList; 
        this.loginForm = builder.group({
            firstName: ["", Validators.required],
            lastName: ["", Validators.required]
      }); 
      
      this.loginForm.controls.lastName.registerOnChange(val => {
        alert("onChange was invoked for last name with value: " + val);
      });
    }
    
    addEmployee() {
        if (!this.loginForm.valid) {
            alert('Please specify all the input fields.');
        }
        /*
        else {
            var newEmployee = new Employee(this.loginForm.controls.firstName.value,
                                           this.loginForm.controls.lastName.value);
            this.employeeList.addEmployee(newEmployee);
        }
        */
    }    
}