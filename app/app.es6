import {Component, View, bootstrap} from 'angular2/angular2'
import {EmployeePage} from 'components/employees/EmployeePage'

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'scripts/app.html',
    directives: [EmployeePage]
})

export class MyAppComponent {
    
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