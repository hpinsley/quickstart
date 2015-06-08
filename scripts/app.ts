/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, Control} from 'angular2/angular2'
import {EmployeePage} from '../app/components/employees/EmployeePage'

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'scripts/app.html',
    directives: [EmployeePage]
})
// Component controller
export class MyAppComponent {
    name: string;
    username: Control;
    
    constructor() {
        console.log("MyAppComponent has been constructed");
        this.name = 'Howard';
        this.username = new Control();
        this.username.value = 'My initial';
        
        setTimeout(() => {
            this.name = 'David';
            console.log('Name is now ' + this.name);
        }, 2000);
    }
}

bootstrap(MyAppComponent);