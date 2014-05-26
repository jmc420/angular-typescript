///<reference path='../lib/DefinitelyTyped/angularjs/angular.d.ts'/>
///<reference path='../lib/DefinitelyTyped/jquery/jquery.d.ts'/>
var AngularTypescript;
(function (AngularTypescript) {
    var Application = (function () {
        function Application() {
        }
        return Application;
    })();
    AngularTypescript.Application = Application;

    $(document).ready(function () {
        var module = angular.module("angularTypeScriptExampleApp", []);
    });
})(AngularTypescript || (AngularTypescript = {}));
