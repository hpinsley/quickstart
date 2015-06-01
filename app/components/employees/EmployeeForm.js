if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __param !== "function") __param = function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
define(["require", "exports", 'angular2/angular2', 'angular2/core', './EmployeePage'], function (require, exports, angular2_1, core_1, EmployeePage_1) {
    var EmployeeForm = (function () {
        function EmployeeForm(page) {
            console.log(page);
        }
        EmployeeForm = __decorate([
            angular2_1.Component({
                selector: 'employee-form',
                injectables: [EmployeePage_1.EmployeePage]
            }),
            angular2_1.View({
                templateUrl: 'app/components/employees/EmployeeForm.html',
                directives: []
            }),
            __param(0, core_1.Parent())
        ], EmployeeForm);
        return EmployeeForm;
    })();
    exports.EmployeeForm = EmployeeForm;
});
//# sourceMappingURL=EmployeeForm.js.map