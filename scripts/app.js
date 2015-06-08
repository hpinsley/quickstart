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
/// <reference path="../typings/tsd.d.ts" />
var angular2_1 = require('angular2/angular2');
var EmployeePage_1 = require('../app/components/employees/EmployeePage');
var MyAppComponent = (function () {
    function MyAppComponent() {
        var _this = this;
        console.log("MyAppComponent has been constructed");
        this.name = 'Howard';
        this.username = new angular2_1.Control();
        this.username.value = 'My initial';
        setTimeout(function () {
            _this.name = 'David';
            console.log('Name is now ' + _this.name);
        }, 2000);
    }
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            templateUrl: 'scripts/app.html',
            directives: [EmployeePage_1.EmployeePage]
        }), 
        __metadata('design:paramtypes', [])
    ], MyAppComponent);
    return MyAppComponent;
})();
exports.MyAppComponent = MyAppComponent;
angular2_1.bootstrap(MyAppComponent);
//# sourceMappingURL=app.js.map