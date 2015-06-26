import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap} from 'angular2/angular2'
import {EmployeePage} from './components/employees/EmployeePage'
import {MainMenu} from './components/menus/MainMenu'
//import {reflector} from 'angular2/src/reflection/reflection';
//import {ReflectionCapabilities} from 'angular2/src/reflection/reflection_capabilities';
import {ModelDrivenForms} from './components/examples/ModelDrivenForms'
import Rx from 'node_modules/rx/dist/rx.all';
import {MousePlay} from './components/rx/MousePlay/MousePlay'

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'app/app.html',
    directives: [EmployeePage, MainMenu, ModelDrivenForms, MousePlay]
})
export class MyAppComponent {
    
    constructor() {
        //this.testRx();
    }
    
    testRx() {
        let self = this;
        console.log("MyAppComponent has been constructed");
        console.log("Rx", Rx);
        this.result = Rx;
        this.observable = Rx.Observable.fromArray([1,2,3,4,5])
                .map(v => v * v)
                .filter(v => v % 2 == 1);
                
        console.log(Rx);
        console.log(this.observable);

        this.observer = new MyObserver();
        this.subject = Rx.AnonymousSubject(this.observer, this.observable);
        console.log("subject", this.subject);
        console.log(this.observer);

        return;
                        
        this.subscription = this.observable.subscribe(
            (val) => {
                console.log(val);
            },
            (error) => {
                console.log("error");
            },
            () => {});
         
         console.log("subscription", this.subscription);
    }
}

//reflector.reflectionCapabilities = new ReflectionCapabilities();
bootstrap(MyAppComponent);