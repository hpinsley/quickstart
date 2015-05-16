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
            new Employee("David", "Pinsley"),
            new Employee("Gia", "Bloss"),
            new Employee("Evangeline", "Nally"),
            new Employee("Edna", "Gagne"),
            new Employee("Ora", "Sum"),
            new Employee("Fawn", "Milo"),
            new Employee("Ji", "Haithcock"),
            new Employee("Margorie", "Paradise"),
            new Employee("Genaro", "Sheehan"),
            new Employee("Adele", "Devitt"),
            new Employee("Sharilyn", "Gerald"),
            new Employee("Rosette", "Philpot"),
            new Employee("Cassaundra", "Meli"),
            new Employee("Christene", "Olea"),
            new Employee("Hedy", "Testani"),
            new Employee("Kourtney", "Dudash"),
            new Employee("Berry", "Webster"),
            new Employee("Savanna", "Crossman"),
            new Employee("Andree", "Lemoine"),
            new Employee("Lara", "Welborn"),
            new Employee("Timothy", "Lumpkin"),
            new Employee("Zella", "Asencio"),
            new Employee("Lizette", "Mccourt"),
            new Employee("Kati", "Laplant"),
            new Employee("Deshawn", "Venable"),
            new Employee("Kym", "Newbold"),
            new Employee("Rick", "Stclair"),
            new Employee("Annie", "Markle"),
            new Employee("Anthony", "Mazzarella"),
            new Employee("Shara", "Deatherage"),
            new Employee("Leonie", "Maiden"),
            new Employee("Kendra", "Tisdale"),
            new Employee("Graig", "Cecere"),
            new Employee("Grisel", "Davis"),
            new Employee("Gilda", "Alloway"),
            new Employee("Sueann", "Shedd"),
            new Employee("Jordan", "Pavelka"),
            new Employee("Nannie", "Weatherby"),
            new Employee("Hayley", "Moree"),
            new Employee("Joelle", "Grable"),
            new Employee("Barbie", "Cooter"),
            new Employee("Krissy", "Wensel"),
            new Employee("Lona", "Spece"),
            new Employee("Tamika", "Schmeling"),
            new Employee("Karie", "Vance"),
            new Employee("Tula", "Lizaola"),
            new Employee("Donnie", "Lundholm"),
            new Employee("Yen", "Virgil"),
            new Employee("Jeannie", "Bourne"),
            new Employee("Lita", "Beal"),
            new Employee("Keesha", "Barwick")
        ];
        setTimeout(() => {
            this.employees[0].first = "Lauren";
        }, 2000);
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
