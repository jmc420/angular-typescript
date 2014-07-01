///<reference path='../lib/DefinitelyTyped/angularjs/angular.d.ts'/>
///<reference path='../lib/DefinitelyTyped/jquery/jquery.d.ts'/>
///<reference path='./controller/Controller.ts'/>

module AngularTypescript {
    export class Application {
        constructor() {

        }
    }

    var app = angular.module("angularTypeScriptExampleApp", ['ngRoute']);

    app.run(function ($rootScope) {
        console.log("Angular Started");
    });

    app.controller('ViewController', ['$scope', function($scope) {
       return new AngularTypescript.controller.Controller($scope);
    }]);

    app.config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/view', {
                templateUrl: 'views/main.html',
                controller: 'ViewController'
            }).otherwise({
                    redirectTo: '/view'
                });
        }
    ]);

    $(document).ready(function () {
        console.log("Document Ready");
    });
}

/*******************************************************************/
