import {Observable, ParentAnnotation as Parent, InjectAnnotation as Inject, ComponentAnnotation as Component, ViewAnnotation as View} from 'angular2/angular2'
import {formDirectives, NgForm, NgControlName, Control, NgControl, Validators, NgFormModel, NgFormControl, FormBuilder, NgModel} from 'angular2/forms';

import {Employee} from './employee'
import {EmployeePage} from './EmployeePage'

@Component({
    selector: 'employee-form',
    appInjector: [FormBuilder],
    properties: ["selectedEmployee:emp","age:age"]
})
@View({
    templateUrl: 'app/components/employees/EmployeeForm.html',
    //directives: [NgFormModel, NgFormControl, NgModel, NgControlName, NgForm]
    directives: [formDirectives]
})

export class EmployeeForm {
    
    constructor(@Inject(FormBuilder) fb) {
        this.message = '';
        this.todoForm = fb.group({
            "message": ["something todo soon...", Validators.required]
        });

        this.model = {
            firstName: "first"
        }
        this.firstName = "";
        //this.firstNameControl = new Control('firstNameControl');
        
        //this.form = fb.group({
        //    firstname: ["", Validators.required],
        //    lastname: ["", Validators.required]
        //}); 

        var self = this;
        this.selectedEmployee = new Employee('empfirst','emplast');
        this.firstName = 'initfirst';
        this.lastName = 'initlast';
    }
    
    onChange($event, val) {
        console.log($event, val);
    }
    
    getEmployeeName() {
        if (this.selectedEmployee) {
            return this.selectedEmployee.fullName;
        }
        else {
            return 'No one is selected';
        }
    }
    
    addEmployee() {
        console.log("Selected employee is ", this.selectedEmployee);
        
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
    }
    
    selectEmployee(emp) {
        console.log('selected (in EmployeeForm)', emp);
        this.selectedEmployee = emp;
        this.firstName = emp.firstName;
        this.lastName = emp.lastName;
    }    
}