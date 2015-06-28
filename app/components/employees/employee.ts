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
        return this.last + ", " + this.first;
    }
}
