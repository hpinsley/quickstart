import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap} from 'angular2/angular2'
import {EmployeePage} from './components/employees/EmployeePage'

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'app/app.html',
    directives: [EmployeePage]
})

export class MyAppComponent {
    
    constructor() {
        console.log("MyAppComponent has been constructed");
    }
}

bootstrap(MyAppComponent);