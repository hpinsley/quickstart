/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="./EmployeePage.ts" />
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
var angular2_1 = require('angular2/angular2');
var employee_1 = require('./employee');
var EmployeeForm = (function () {
    function EmployeeForm() {
        console.log('Constructed the employee form');
        this.employee = new employee_1.Employee("dummy", "fake");
    }
    EmployeeForm.prototype.selectEmployee = function (emp) {
        console.log("In Employee form.  Setting current employee to " + emp.fullName);
        this.employee = emp;
    };
    EmployeeForm.prototype.updateEmp = function () {
        this.employee.last = "happy";
        console.log('Set the last name to happy.');
    };
    EmployeeForm = __decorate([
        angular2_1.Component({
            selector: 'employee-form',
            properties: {
                employee: 'employee'
            }
        }),
        angular2_1.View({
            templateUrl: 'app/components/employees/EmployeeForm.html'
        }), 
        __metadata('design:paramtypes', [])
    ], EmployeeForm);
    return EmployeeForm;
})();
exports.EmployeeForm = EmployeeForm;
//# sourceMappingURL=EmployeeForm.js.map