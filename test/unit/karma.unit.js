var base = require('./karma.base.js');

module.exports = function(config) {
  config.set(
    Object.assign(base, {
      browsers: ['Chrome', 'Firefox', 'PhantomJS'],
      reporters: ['progress'],
      singleRun: true,
      plugins: base.plugins.concat([
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-phantomjs-launcher'
      ])
    })
  );
};
