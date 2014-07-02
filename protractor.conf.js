exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    specs: ['./test/spec/EndToEndTestSuite.js'],

    jasmineNodeOpts: {
        showColors: false // Use colors in the command line report.
    }
};