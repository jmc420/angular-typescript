var AngularTypescript;
(function (AngularTypescript) {
    (function (controller) {
        var Controller = (function () {
            function Controller($scope) {
                this.$scope = $scope;
                $scope.title = "Example Angular Typescript Application";
                console.log("Controller");
                this.grid = this.createGrid();
            }
            Controller.prototype.createGrid = function () {
                var columns = [
                    { id: "title", name: "Title", field: "title" },
                    { id: "duration", name: "Duration", field: "duration" },
                    { id: "%", name: "% Complete", field: "percentComplete" },
                    { id: "start", name: "Start", field: "start" },
                    { id: "finish", name: "Finish", field: "finish" },
                    { id: "effort-driven", name: "Effort Driven", field: "effortDriven" }
                ];

                var options = {
                    enableCellNavigation: true,
                    enableColumnReorder: false,
                    forceFitColumns: true
                };

                $(function () {
                    var data = [];
                    for (var i = 0; i < 500; i++) {
                        data[i] = {
                            title: "Task " + i,
                            duration: "5 days",
                            percentComplete: Math.round(Math.random() * 100),
                            start: "01/01/2009",
                            finish: "01/05/2009",
                            effortDriven: (i % 5 == 0)
                        };
                    }

                    return Slick.Grid("#grid", data, columns, options);
                });
            };
            return Controller;
        })();
        controller.Controller = Controller;
    })(AngularTypescript.controller || (AngularTypescript.controller = {}));
    var controller = AngularTypescript.controller;
})(AngularTypescript || (AngularTypescript = {}));
///<reference path='../../lib/DefinitelyTyped/angularjs/angular.d.ts'/>
///<reference path='../../lib/DefinitelyTyped/jquery/jquery.d.ts'/>
///<reference path='./controller/Controller.ts'/>
var AngularTypescript;
(function (AngularTypescript) {
    var Application = (function () {
        function Application() {
        }
        return Application;
    })();
    AngularTypescript.Application = Application;

    var app = angular.module("angularTypeScriptExampleApp", ['ngRoute']);

    app.run(function ($rootScope) {
        console.log("Angular Started");
    });

    app.controller('ViewController', [
        '$scope',
        function ($scope) {
            return new AngularTypescript.controller.Controller($scope);
        }
    ]);

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
        console.log("Application Document Ready");
    });
})(AngularTypescript || (AngularTypescript = {}));
