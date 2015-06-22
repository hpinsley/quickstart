import {Observable, ParentAnnotation as Parent, InjectAnnotation as Inject, ComponentAnnotation as Component, ViewAnnotation as View} from 'angular2/angular2'
import {formDirectives, NgControl, Validators, NgFormModel, NgFormControl, FormBuilder} from 'angular2/forms';

import {Employee} from './employee'
import {EmployeePage} from './EmployeePage'

@Component({
    selector: 'employee-form',
    appInjector: [FormBuilder]
})
@View({
    templateUrl: 'app/components/employees/EmployeeForm.html',
    directives: [NgFormModel]
})

export class EmployeeForm {
    
    
    constructor(@Inject(FormBuilder) builder) {
            
        var self = this;
                
        this.loginForm = builder.group({
            firstName: ["", Validators.required],
            lastName: ["", Validators.required]
      }); 
            
      this.selectedEmployee = null;      
    }
    
    addEmployee() {
        if (!this.loginForm.valid) {
            alert('Please specify all the input fields.');
        }
        else {
            var newEmployee = new Employee(this.loginForm.controls.firstName.value,
                                           this.loginForm.controls.lastName.value);
            console.log("new employee", newEmployee);
        }
    }
    
    updateEmployee() {
        if (!this.loginForm.valid) {
            alert('Please specify all the input fields.');
        }
        else if (!this.selectedEmployee) {
            alert('No employee selected');
        }
        else {
            this.selectedEmployee.first = this.loginForm.controls.firstName.value;
            this.selectedEmployee.last = this.loginForm.controls.lastName.value;
        }
    }

    clearSelectedEmployee() {
        this.selectedEmployee = null;
        this.loginForm.controls.firstName.updateValue('');
        this.loginForm.controls.lastName.updateValue('');
    }
    
    selectEmployee(emp) {
        console.log('selected (in EmployeeForm)', emp);
        this.selectedEmployee = emp;
        this.loginForm.controls.firstName.updateValue(emp.first);
        this.loginForm.controls.lastName.updateValue(emp.last);
    }    
}