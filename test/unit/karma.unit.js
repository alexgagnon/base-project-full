var base = require('./karma.base.js');

module.exports = function(config) {
  config.set(
    Object.assign(base, {
      singleRun: true,
      browsers: ['Chrome', 'Firefox', 'PhantomJS'],
      reporters: ['progress', 'junit'],
      junitReporter: {
        outputDir: '../../test-results/'
      },
      plugins: base.plugins.concat([
        'karma-junit-reporter',
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-phantomjs-launcher'
      ])
    })
  );
};
