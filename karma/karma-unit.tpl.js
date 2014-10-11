module.exports = function ( karma ) {
    var karmaConfiguration = {
    /** 
     * From where to look for files, starting with the location of this file.
     */
    basePath: '../',

    exclude: [
      'src/assets/**/*.js'
    ],
    frameworks: [ 'jasmine' ],
    plugins: [
        'karma-jasmine',
        'karma-coverage',
        'karma-firefox-launcher',
        'karma-coffee-preprocessor',
        'karma-phantomjs-launcher'
    ],
    preprocessors: {
      '**/*.coffee': 'coffee',
      'src/*.js': ['coverage']
    },

    /**
     * How to report, by default.
     */
    reporters: 'dots',

    /**
     * On which port should the browser connect, on which port is the test runner
     * operating, and what is the URL path for the browser to use.
     */
    port: 9018,
    runnerPort: 9100,
    urlRoot: '/',

    /** 
     * Disable file watching by default.
     */
    autoWatch: false,

    /**
     * The list of browsers to launch to test on. This includes only "Firefox" by
     * default, but other browser names include:
     * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
     *
     * Note that you can also use the executable name of the browser, like "chromium"
     * or "firefox", but that these vary based on your operating system.
     *
     * You may also leave this blank and manually navigate your browser to
     * http://localhost:9018/ when you're running tests. The window/tab can be left
     * open and the tests will automatically occur there during the build. This has
     * the aesthetic advantage of not launching a browser every time you save.
     */
    browsers: [
      'PhantomJS'
    ]
  };


    var union = function(array1, array2) {
        for(var i = 0; i < array2.length; i++) {
            array1.push(array2[i]);
        }
    };

    karmaConfiguration.files = [];

    var vendorFiles = require( '../build.config.js').vendor_files.js;
    var testFiles = require( '../build.config.js').test_files.js;

    union(karmaConfiguration.files, vendorFiles);
    union(karmaConfiguration.files, testFiles);
    union(karmaConfiguration.files, [
        'build/templates-app.js',
        'build/templates-common.js',
        'src/**/*.js',
        'src/**/*.coffee'
    ]);

    karma.set(karmaConfiguration);
};

