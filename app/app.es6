import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap} from 'angular2/angular2'
import {EmployeePage} from './components/employees/EmployeePage'
import {MainMenu} from './components/menus/MainMenu'
//import {reflector} from 'angular2/src/reflection/reflection';
//import {ReflectionCapabilities} from 'angular2/src/reflection/reflection_capabilities';

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

//reflector.reflectionCapabilities = new ReflectionCapabilities();
bootstrap(MyAppComponent);