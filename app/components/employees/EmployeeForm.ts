/// <reference path="../../../typings/angular2/angular2.d.ts" />
import {Component, View} from 'angular2/angular2'
import {Employee} from './employee'


@Component({
    selector: 'employee-form'
})
@View({
    templateUrl: 'app/components/employees/EmployeeForm.html',
    directives: []
})
// Component controller
export class EmployeeForm {

    constructor() {

    }
}

