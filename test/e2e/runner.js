if (!process.env.CI) {
  require('dotenv').config();
}
var fs = require('fs');
var globby = require('globby');
var createTestCafe = require('testcafe');
var testcafeBrowsers = require('../browsers.js').testcafeBrowsers;
var batch = testcafeBrowsers[process.argv[4] || 0];
var browsers = batch[0];
console.log(browsers);
var testcafe = null;

var sources = globby.sync('test/e2e/*.test.js');
try {
  fs.mkdirSync('./test-results');
} catch (err) {
  // fine
}
var stream = fs.createWriteStream('./test-results/report.xml');

createTestCafe()
.then(tc => {
  testcafe = tc;
  testcafe
  .createRunner()
  .src(sources)
  .browsers(browsers)
  .reporter('xunit', stream)
  .run()
  .then(() => {
    stream.end();
    console.log('Success!');
  })
  .catch(err => {
    console.error(err);
    testcafe.close();
    process.exit(0);
  })
  .then(() => testcafe.close());
})
.catch(err => {
  console.error(err);
  testcafe.close();
});
