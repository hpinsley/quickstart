import {Observable, ParentAnnotation as Parent, InjectAnnotation as Inject, ComponentAnnotation as Component, ViewAnnotation as View} from 'angular2/angular2'
//import {FormBuilder, Validators, NgControlGroup, NgFormControl, NgFormModel, NgControl} from 'angular2/forms';

//import { ElementRef } from 'angular2/core';
//import { Renderer } from 'angular2/render';
//import { Directive } from 'angular2/annotations';

import {formDirectives, NgControl, Validators, NgFormModel, NgFormControl, FormBuilder} from 'angular2/forms';

import {Employee} from './employee'
import {EmployeePage} from './EmployeePage'
import {EmployeeList} from './EmployeeList'

//console.log(FormBuilder, Validators, NgFormControl, NgFormModel, NgControl);

@Component({
    selector: 'employee-form',
    appInjector: [FormBuilder, EmployeeList]
})
@View({
    templateUrl: 'app/components/employees/EmployeeForm.html',
    directives: [NgFormModel, NgFormControl]
})

export class EmployeeForm {
    
    
    constructor(@Inject(FormBuilder) builder, @Parent() @Inject(EmployeeList) empList) {
            
        var self = this;
                
        this.employeeList = empList; 
        this.loginForm = builder.group({
            firstName: ["", Validators.required],
            lastName: ["", Validators.required]
      }); 
      
      //this.loginForm.controls.lastName.registerOnChange(val => {
      //  alert("onChange was invoked for last name with value: " + val);
      //});
      
      this.selectedEmployee = null;
      
      var subscription = this.employeeList.select._subject._subscribe({
        onNext: self.selectEmployee.bind(self)
      });
      
      console.log('Subscription return value', subscription);
    }
    
    addEmployee() {
        if (!this.loginForm.valid) {
            alert('Please specify all the input fields.');
        }
        else {
            var newEmployee = new Employee(this.loginForm.controls.firstName.value,
                                           this.loginForm.controls.lastName.value);
            this.employeeList.addEmployee(newEmployee);
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