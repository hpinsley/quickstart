/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2'
import {EmployeePage} from './components/employees/EmployeePage'

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'app/app.html',
    directives: [EmployeePage]
})
// Component controller
export class MyAppComponent {
    name: string;
    
    constructor() {
        console.log("MyAppComponent has been constructed");
        this.name = 'Howard';
        
        setTimeout(() => {
            this.name = 'David';
            console.log('Name is now ' + this.name);
        }, 2000);
    }
}

bootstrap(MyAppComponent);