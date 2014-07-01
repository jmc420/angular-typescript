///<reference path='../../lib/DefinitelyTyped/angularjs/angular.d.ts'/>
///<reference path='../../lib/DefinitelyTyped/angularjs/angular-mocks.d.ts'/>
///<reference path='../../lib/DefinitelyTyped/jquery/jquery.d.ts'/>
///<reference path='../../lib/DefinitelyTyped/jasmine/jasmine.d.ts'/>
describe('TestSuite', function () {
    beforeEach(function () {
        console.log("Mock grid");
        $('<div id="grid"></div>').appendTo('body');
    });

    // load the controller's module
    beforeEach(module('angularTypeScriptExampleApp'));

    var viewController, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        viewController = $controller('ViewController', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        var title = "Example Angular Typescript Application";

        expect(scope.title).toBe(title);
        console.log("Found title: " + title);
    });
});
