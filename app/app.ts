import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'app/app.html',
    directives: []
})

export class MyAppComponent {
    
    constructor() {
        console.log("MyAppComponent has been constructed");
    }
}

bootstrap(MyAppComponent);