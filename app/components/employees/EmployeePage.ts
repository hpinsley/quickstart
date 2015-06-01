/// <reference path="../../../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, For} from 'angular2/angular2'

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
// Component controller
export class EmployeePage {

    context : {
        selectedEmployee: any;
        title:string;
    };

    constructor() {
        this.context = {
            selectedEmployee: null,
            title: 'This is from the context'
        }
    }

    buttonClick() {
        alert('button click');
    }
}

