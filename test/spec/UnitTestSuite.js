describe('UnitTestSuite', function () {
    beforeEach(function () {
        console.log("Mock grid");
        $('<div id="grid"></div>').appendTo('body');
    });

    beforeEach(module('angularTypeScriptExampleApp'));

    var viewController, scope;

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
