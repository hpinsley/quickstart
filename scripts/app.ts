import {Component, View, bootstrap} from '../node_modules/angular2/angular2'
//import {EmployeePage} from '../app/components/employees/EmployeePage'
var age = 24;

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'scripts/app.html'         //,
    //directives: [EmployeePage]
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

