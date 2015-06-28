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
var angular2_1 = require('angular2/angular2');
var EmployeeForm_1 = require('./EmployeeForm');
var EmployeeList_1 = require('./EmployeeList');
var EmployeePage = (function () {
    function EmployeePage() {
        this.context = {
            selectedEmployee: null,
            title: 'This is from the context'
        };
    }
    EmployeePage.prototype.buttonClick = function () {
        alert('button click');
    };
    EmployeePage = __decorate([
        angular2_1.Component({
            selector: 'employee-page'
        }),
        angular2_1.View({
            templateUrl: 'app/components/employees/EmployeePage.html',
            directives: [EmployeeForm_1.EmployeeForm, EmployeeList_1.EmployeeList]
        }), 
        __metadata('design:paramtypes', [])
    ], EmployeePage);
    return EmployeePage;
})();
exports.EmployeePage = EmployeePage;
