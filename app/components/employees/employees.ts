/// <reference path="../../../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, For} from 'angular2/angular2'

interface IEmployee {
    first: string;
    last:string;
    fullName:string;
}

export class Employee implements  IEmployee {
    first: string;
    last: string;

    constructor (first:string, last:string) {
        this.first = first;
        this.last = last;
    }

    get fullName() {
        return this.first + " " + this.last;
    }
}


@Component({
    selector: 'employee-list'
})
@View({
    templateUrl: 'app/components/employees/EmployeeList.html',
    directives: [For]
})

// Component controller
export class EmployeeList {

    public employees:Employee[];
    public age:number = 55;

    constructor() {
        console.log("Employee list has been constructed.");
        this.employees = [
            new Employee("Howard", "Pinsley"),
            new Employee("David", "Pinsley")
        ];
    }
}

