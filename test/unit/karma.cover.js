var base = require('./karma.base.js');

var dir = '../../test-results/coverage';

module.exports = function(config) {
  var options = Object.assign(base, {
    browsers: ['PhantomJS'],
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      reporters: [
        {type: 'lcov', dir: dir, subdir: '.'},
        {type: 'text-summary', dir: dir, subdir: '.'}
      ]
    },
    singleRun: true,
    plugins: base.plugins.concat(['karma-coverage', 'karma-phantomjs-launcher'])
  });

  // add babel-plugin-istanbul for code instrumentation
  options.webpack.module.rules[0].options = {
    plugins: [
      [
        'istanbul',
        {
          exclude: ['test/', 'src/*.test.js']
        }
      ]
    ]
  };

  config.set(options);
};
