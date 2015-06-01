/// <reference path="../../../typings/angular2/angular2.d.ts" />
import {Component, View, Core} from 'angular2/angular2'
import {Parent} from 'angular2/core'
import {Employee} from './employee'
import {EmployeePage} from './EmployeePage'

@Component({
    selector: 'employee-form',
    injectables: [EmployeePage]
})
@View({
    templateUrl: 'app/components/employees/EmployeeForm.html',
    directives: []
})
// Component controller
export class EmployeeForm {

    constructor(@Parent() page:EmployeePage) {
        console.log(page);
    }
}

