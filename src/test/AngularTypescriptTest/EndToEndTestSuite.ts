///<reference path='../../lib/DefinitelyTyped/angularjs/angular.d.ts'/>
///<reference path='../../lib/DefinitelyTyped/angularjs/angular-mocks.d.ts'/>
///<reference path='../../lib/DefinitelyTyped/jquery/jquery.d.ts'/>
///<reference path='../../lib/DefinitelyTyped/jasmine/jasmine.d.ts'/>
///<reference path='../../lib/DefinitelyTyped/angular-protractor/angular-protractor.d.ts'/>

describe('EndToEndTestSuite', function () {

    it('checkTitle', function () {
        var title = "Example Angular Typescript Application";

        browser.get('http://localhost/angular-typescript');

        var titleElement = element(by.binding('title'));

        expect(titleElement.getText()).toBe(title);

        titleElement.getText().then(function(text) {
            console.log("Found title "+text);
        });
    });
});

/*******************************************************************/
