var Employee = (function () {
    function Employee(first, last) {
        this.first = first;
        this.last = last;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this.first + " " + this.last;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
})();
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map