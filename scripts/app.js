if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
import { Component, View, bootstrap } from '../node_modules/angular2/angular2';
//import {EmployeePage} from '../app/components/employees/EmployeePage'
var age = 24;
let MyAppComponent = class {
    constructor() {
        console.log("MyAppComponent has been constructed");
        this.name = 'Howard';
    }
};
Object.defineProperty(MyAppComponent, "name", { value: "MyAppComponent", configurable: true });
MyAppComponent = __decorate([
    Component({
        selector: 'my-app'
    }),
    View({
        templateUrl: 'scripts/app.html' //,
    })
], MyAppComponent);
bootstrap(MyAppComponent);
