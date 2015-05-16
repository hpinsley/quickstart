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
            new Employee("David", "Pinsley"),
            new Employee("Gia","Bloss"),
            new Employee("Evangeline","Nally"),
            new Employee("Edna","Gagne"),
            new Employee("Ora","Sum"),
            new Employee("Fawn","Milo"),
            new Employee("Ji","Haithcock"),
            new Employee("Margorie","Paradise"),
            new Employee("Genaro","Sheehan"),
            new Employee("Adele","Devitt"),
            new Employee("Sharilyn","Gerald"),
            new Employee("Rosette","Philpot"),
            new Employee("Cassaundra","Meli"),
            new Employee("Christene","Olea"),
            new Employee("Hedy","Testani"),
            new Employee("Kourtney","Dudash"),
            new Employee("Berry","Webster"),
            new Employee("Savanna","Crossman"),
            new Employee("Andree","Lemoine"),
            new Employee("Lara","Welborn"),
            new Employee("Timothy","Lumpkin"),
            new Employee("Zella","Asencio"),
            new Employee("Lizette","Mccourt"),
            new Employee("Kati","Laplant"),
            new Employee("Deshawn","Venable"),
            new Employee("Kym","Newbold"),
            new Employee("Rick","Stclair"),
            new Employee("Annie","Markle"),
            new Employee("Anthony","Mazzarella"),
            new Employee("Shara","Deatherage"),
            new Employee("Leonie","Maiden"),
            new Employee("Kendra","Tisdale"),
            new Employee("Graig","Cecere"),
            new Employee("Grisel","Davis"),
            new Employee("Gilda","Alloway"),
            new Employee("Sueann","Shedd"),
            new Employee("Jordan","Pavelka"),
            new Employee("Nannie","Weatherby"),
            new Employee("Hayley","Moree"),
            new Employee("Joelle","Grable"),
            new Employee("Barbie","Cooter"),
            new Employee("Krissy","Wensel"),
            new Employee("Lona","Spece"),
            new Employee("Tamika","Schmeling"),
            new Employee("Karie","Vance"),
            new Employee("Tula","Lizaola"),
            new Employee("Donnie","Lundholm"),
            new Employee("Yen","Virgil"),
            new Employee("Jeannie","Bourne"),
            new Employee("Lita","Beal"),
            new Employee("Keesha","Barwick")

        ];

        setTimeout(()=>{
            this.employees[0].first = "Lauren";
        }, 2000);
    }
}

