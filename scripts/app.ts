/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2'

var age = 24;

@Component({
    selector: 'my-app'
})
@View({
    template: `<h1>AHHHH Hello there {{ name }}  you are ${age} years old</h1>`
})
// Component controller
class MyAppComponent {
    name: string;

    constructor() {
        this.name = 'Alice';
    }
}

bootstrap(MyAppComponent);

