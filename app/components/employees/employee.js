export class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    get fullName() {
        return this.first + " " + this.last;
    }
}
