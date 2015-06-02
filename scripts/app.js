if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'angular2/angular2', '../app/components/employees/EmployeePage'], function (require, exports, angular2_1, EmployeePage_1) {
    var age = 24;
    var MyAppComponent = (function () {
        function MyAppComponent() {
            console.log("MyAppComponent has been constructed");
            this.name = 'Howard';
        }
        MyAppComponent = __decorate([
            angular2_1.Component({
                selector: 'my-app'
            }),
            angular2_1.View({
                templateUrl: 'scripts/app.html',
                directives: [EmployeePage_1.EmployeePage]
            })
        ], MyAppComponent);
        return MyAppComponent;
    })();
    angular2_1.bootstrap(MyAppComponent);
});
//# sourceMappingURL=app.js.map