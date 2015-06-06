if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="./EmployeePage.ts" />
var angular2_1 = require('angular2/angular2');
var employee_1 = require('./employee');
var EmployeeForm_1 = require('./EmployeeForm');
var EmployeeList = (function () {
    function EmployeeList(employeeForm) {
        var _this = this;
        this.age = 55;
        console.log("Employee list has been constructed.");
        this.employees = [
            new employee_1.Employee("Howard", "Pinsley"),
            new employee_1.Employee("David", "Pinsley"),
            new employee_1.Employee("Gia", "Bloss"),
            new employee_1.Employee("Evangeline", "Nally"),
            new employee_1.Employee("Edna", "Gagne"),
            new employee_1.Employee("Ora", "Sum"),
            new employee_1.Employee("Fawn", "Milo"),
            new employee_1.Employee("Ji", "Haithcock"),
            new employee_1.Employee("Margorie", "Paradise"),
            new employee_1.Employee("Genaro", "Sheehan"),
            new employee_1.Employee("Adele", "Devitt"),
            new employee_1.Employee("Sharilyn", "Gerald")
        ];
        setTimeout(function () {
            _this.employees[0].first = "Lauren";
        }, 2000);
    }
    EmployeeList.prototype.employeeClick = function (emp) {
        alert('You clicked an employee: ' + emp.fullName);
    };
    EmployeeList = __decorate([
        angular2_1.Component({
            selector: 'employee-list',
            //componentServices: [EmployeeForm]
            appInjector: [EmployeeForm_1.EmployeeForm]
        }),
        angular2_1.View({
            templateUrl: 'app/components/employees/EmployeeList.html',
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [EmployeeForm_1.EmployeeForm])
    ], EmployeeList);
    return EmployeeList;
})();
exports.EmployeeList = EmployeeList;
//# sourceMappingURL=EmployeeList.js.map