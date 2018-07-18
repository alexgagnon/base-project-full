# testing

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![codecov](https://codecov.io/gh/alexgagnon/testing/branch/master/graph/badge.svg)](https://codecov.io/gh/alexgagnon/testing)
[![CircleCI](https://circleci.com/gh/alexgagnon/testing/tree/master.svg?style=svg&circle-token=8fd070b9be24a6fab6b432f84001622d4a110382)](https://circleci.com/gh/alexgagnon/testing/tree/master)
[![Sauce Test Status](https://saucelabs.com/buildstatus/alexgagnon)](https://saucelabs.com/u/alexgagnon)
[![Sauce Test Status](https://saucelabs.com/browser-matrix/alexgagnon.svg)](https://saucelabs.com/u/alexgagnon)

POC of getting various CI/CD and test frameworks running together. Includes:

- circleci - ci/cd server
- codecov - coverage reports
- saucelabs - browser virtualizer
- flow - javascript static type checker
- eslint - javascript linter
- stylelint - css linter
- husky - for custom git hooks to restrict commit and push
- commitizen - for standardized commit messages
- karma - in browser unit test harness
- jasmine - unit test framework
- testcafe - e2e test framework
- semantic-release - controls publishing/deploys with automatic versioning
