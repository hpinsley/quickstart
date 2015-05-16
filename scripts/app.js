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
/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="./employees.ts" />
var angular2_1 = require('angular2/angular2');
var employees_1 = require('./employees');
var age = 24;
var MyAppComponent = (function () {
    function MyAppComponent() {
        console.log("MyAppComponent has been constructed");
        this.name = 'Howard';
    }
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            directives: [employees_1.EmployeeList]
        }),
        angular2_1.View({
            template: "<h1>Hello there {{ name }}  you are " + age + " years old</h1>\n    <h2>This is an H2</h2>\n    <employee-list></employee-list>\n    <div>After the employee list</div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent);
