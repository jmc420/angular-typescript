describe('EndToEndTestSuite', function () {
    it('checkTitle', function () {
        var title = "Example Angular Typescript Application";

        browser.get('http://localhost/angular-typescript');

        var titleElement = element(by.binding('title'));

        expect(titleElement.getText()).toBe(title);

        titleElement.getText().then(function (text) {
            console.log("Found title " + text);
        });
    });
});
