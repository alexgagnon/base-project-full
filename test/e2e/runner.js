if (!process.env.CI) {
  require('dotenv').config();
}
var globby = require('globby');
var createTestCafe = require('testcafe');
var testcafeBrowsers = require('../browsers.js').testcafeBrowsers;
var batch = testcafeBrowsers[process.argv[4] || 0];
// var browsers = batch.join(',');
var browsers = batch[0];
console.log(browsers);
var runner = null;
var testcafe = null;

var sources = globby.sync('test/e2e/*.test.js');

createTestCafe()
.then(tc => {
  testcafe = tc;
  runner = testcafe
  .createRunner()
  .src(sources)
  .browsers(browsers)
  .run()
  .then(failedCount => {
    console.log('Success!');
  })
  .catch(err => {
    console.error(err);
  })
  .then(() => testcafe.close());
})
.catch(err => console.error(err));
