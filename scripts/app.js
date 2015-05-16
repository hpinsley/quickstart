var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, View, bootstrap } from 'angular2/angular2';
import { EmployeeList } from '../app/components/employees/employees';
var age = 24;
let MyAppComponent = class {
    constructor() {
        console.log("MyAppComponent has been constructed");
        this.name = 'Howard';
    }
};
MyAppComponent = __decorate([
    Component({
        selector: 'my-app'
    }),
    View({
        templateUrl: 'scripts/app.html',
        directives: [EmployeeList]
    }), 
    __metadata('design:paramtypes', [])
], MyAppComponent);
bootstrap(MyAppComponent);
