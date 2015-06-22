export class Employee {

    constructor (first, last) {
        this.first = first;
        this.last = last;
    }

    get fullName() {
        return this.first + " " + this.last;
    }
    
    get lastName() {
        return this.last;
    }
    
    set lastName(val) {
        console.log("Setting last name of ", this.fullName, "to be", val);
        this.last = val;
    }
    
    get firstName() {
        return this.first;
    }
    
    set firstName(val) {
        console.log("Setting first name of ", this.fullName, "to be", val);
        this.first = val;
    }
}
