// Karma configuration
// Generated on Fri Mar 18 2016 14:51:33 GMT-0300 (BRT)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '.',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'lib/angular/angular.min.js',
            'lib/jquery/dist/jquery.min.js',
            'lib/bootstrap/dist/js/bootstrap.min.js',
            'lib/angular-mocks/angular-mocks.js',
            'lib/angular-route/angular-route.min.js',
            'lib/angular-crumble/crumble.js',
            'app/app.module.js',
            'app/app.config.js',
            'app/app.main.js',
            'app/components/head-menu.js',
            'app/components/sidebar-left.js',
            'app/components/small-box.js',
            'app/components/content-header.js',
            'app/sessions/app.home.js',


            'test/*Spec.js'
        ],


        // list of files to exclude
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultanous
        concurrency: Infinity
    })
};