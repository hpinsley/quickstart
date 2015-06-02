if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'angular2/angular2'], function (require, exports, angular2_1) {
    //import {Parent} from 'angular2/core'
    //import {Employee} from './employee'
    //import {EmployeePage} from './EmployeePage'
    var EmployeeForm = (function () {
        function EmployeeForm() {
            console.log('Constructed the employee form');
        }
        EmployeeForm = __decorate([
            angular2_1.Component({
                selector: 'employee-form'
            }),
            angular2_1.View({
                templateUrl: 'app/components/employees/EmployeeForm.html',
                directives: []
            })
        ], EmployeeForm);
        return EmployeeForm;
    })();
    exports.EmployeeForm = EmployeeForm;
});
//# sourceMappingURL=EmployeeForm.js.map