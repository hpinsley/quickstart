/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2'


@Component({
    selector: 'employee-list'
})
@View({
    template: `<div>Employee List</div>`
})
// Component controller
export class EmployeeList {

    constructor() {
        console.log("Employee list has been constructed.");
    }
}

