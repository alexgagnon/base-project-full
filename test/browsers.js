var batches = [
  // the cool kids
  {
    sl_chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Windows 7'
    },
    sl_firefox: {
      base: 'SauceLabs',
      browserName: 'firefox',
      testcafe: 'saucelabs:Firefox@67.0:Windows 7'
    },
    sl_mac_safari: {
      base: 'SauceLabs',
      browserName: 'safari',
      platform: 'OS X 10.10'
    }
  },

  // ie family
  {
    sl_ie_9: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 7',
      version: '9'
    },
    sl_ie_10: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 7',
      version: '10'
    },
    sl_ie_11: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 7',
      version: '11'
    },
    sl_edge: {
      base: 'SauceLabs',
      browserName: 'MicrosoftEdge',
      platform: 'Windows 10'
    }
  },

  // mobile
  {
    sl_ios_safari_9: {
      base: 'SauceLabs',
      browserName: 'iphone',
      version: '10.3'
    },
    sl_android_6_0: {
      base: 'SauceLabs',
      browserName: 'android',
      version: '6.0'
    }
  }
];

var testcafeBrowsers = [
  [
    'saucelabs:MicrosoftEdge@16.16299:Windows 10',
    'saucelabs:Firefox@61.0:Windows 10',
    'saucelabs:Chrome@67.0:Windows 10',
    'saucelabs:Chrome@67.0:OS X 10.11',
    'saucelabs:Safari@10.0:OS X 10.11'
  ],
  [
    'saucelabs:Internet Explorer@10.0:Windows 7',
    'saucelabs:Internet Explorer@11.0:Windows 7'
  ],
  ['saucelabs:Android Emulator Phone@6.0', 'saucelabs:iPhone Simulator@10.3'],
  [
    'saucelabs:Chrome@66.0:Windows 10',
    'saucelabs:Chrome@67.0:Windows 7',
    'saucelabs:Chrome@48.0:Linux',
    'saucelabs:Firefox@45.0:Linux',
    'saucelabs:Firefox@61.0:OS X 10.11'
  ]
];

module.exports = {
  batches: batches,
  testcafeBrowsers: testcafeBrowsers
};
