'use strict';

describe('Controller: MainCtrl', function () {

    beforeEach(function () {
        console.log("Mock grid")
        $('<div id="grid"></div>').appendTo('body');
    });

    // load the controller's module
    beforeEach(module('angularTypeScriptExampleApp'));

    var ViewController,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ViewController = $controller('ViewController', {
            $scope: scope
        });


    }));

    it('should attach a list of awesomeThings to the scope', function () {
        var title = "Example Angular Typescript Application";

        expect(scope.title).toBe(title);
        console.log("Found title: "+title);
    });
});
