// import all helpers
// var helpersContext = require.context("../helpers", true);
// helpersContext.keys().forEach(helpersContext);

// require all test files
var testsContext = require.context('../../src/', true, /\.test$/);
testsContext.keys().forEach(testsContext);
