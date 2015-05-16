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
import { Component, View, For } from 'angular2/angular2';
export class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    get fullName() {
        return this.first + " " + this.last;
    }
}
export let EmployeeList = class {
    constructor() {
        this.age = 55;
        console.log("Employee list has been constructed.");
        this.employees = [
            new Employee("Howard", "Pinsley"),
            new Employee("David", "Pinsley")
        ];
    }
};
EmployeeList = __decorate([
    Component({
        selector: 'employee-list'
    }),
    View({
        templateUrl: 'app/components/employees/EmployeeList.html',
        directives: [For]
    }), 
    __metadata('design:paramtypes', [])
], EmployeeList);
