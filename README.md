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

## How to use

- add changed files to tracked (git add)
- use 'npm run cmt' to commit
- commitizen will run git commit formatter
- husky will run local unit tests
- push
- husky will run all tests, and if successful, pushes to remote
- circleci detects changes, and begins running workflow
- runs tests in saucelabs (karma for unit, testcafe for e2e)
- if both unit and e2e jobs pass, coverage report is generated and sent to codecov, and the build process executes
- if successful, goes to deploy (currently only if the changes are in ;master branch)
