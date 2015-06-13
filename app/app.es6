import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap} from 'angular2/angular2'
import {EmployeePage} from './components/employees/EmployeePage'
import {MainMenu} from './components/menus/MainMenu'

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'app/app.html',
    directives: [EmployeePage, MainMenu]
})

export class MyAppComponent {
    
    constructor() {
        console.log("MyAppComponent has been constructed");
    }
}

bootstrap(MyAppComponent);