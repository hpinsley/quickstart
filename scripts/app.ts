/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="./../app/components/employees/employees.ts" />
import {Component, View, bootstrap} from 'angular2/angular2'
import {EmployeeList} from '../app/components/employees/employees'
var age = 24;

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'scripts/app.html',
    directives: [EmployeeList]
})
// Component controller
class MyAppComponent {
    name: string;

    constructor() {
        console.log("MyAppComponent has been constructed");
        this.name = 'Howard';
    }
}

bootstrap(MyAppComponent);

