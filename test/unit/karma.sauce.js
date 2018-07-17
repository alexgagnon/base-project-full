if (!process.env.CI) {
  require('dotenv').config();
}
var base = require('./karma.base.js');
var batches = require('../browsers.js').batches;

/**
 * Having too many tests running concurrently on saucelabs
 * causes timeouts and errors, so we have to run them in
 * smaller batches.
 */

module.exports = function(config) {
  var batch = batches[process.argv[4] || 0];

  // NOTE: the saucelabs-launcher uses process.env.SAUCE_USERNAME and process.env.SAUCE_ACCESS_KEY by default
  config.set(
    Object.assign(base, {
      singleRun: true,
      browsers: Object.keys(batch),
      customLaunchers: batch,
      reporters: process.env.CI
        ? ['dots', 'saucelabs'] // avoid spamming CI output
        : ['progress', 'saucelabs'],
      sauceLabs: {
        testName: 'testing',
        recordScreenshots: false,
        connectOptions: {
          'no-ssl-bump-domains': 'all' // Ignore SSL error on Android emulator
        },
        build:
          process.env.CIRCLE_BUILD_NUM ||
          process.env.SAUCE_BUILD_ID ||
          Date.now()
      },
      // mobile emulators are really slow
      captureTimeout: 300000,
      browserNoActivityTimeout: 300000,
      plugins: base.plugins.concat(['karma-sauce-launcher'])
    })
  );
};
