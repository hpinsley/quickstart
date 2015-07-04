import {Component, View, bootstrap} from 'angular2/angular2';
import {EmployeePage} from './components/employees/EmployeePage';
import {Working} from './components/misc/Working';

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'app/app.html',
    directives: [EmployeePage, Working]
})

export class MyAppComponent {
    
    constructor() {
        console.log("MyAppComponent has been constructed");
    }
}

bootstrap(MyAppComponent);