//
// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//
//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/
//

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['test'],

  // See https://nightwatchjs.org/guide/working-with-page-objects/using-page-objects.html
  page_objects_path: ['page-objects'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/plugin-api.html
  plugins: ['nightwatch-saucelabs-visual', 'nightwatch-saucelabs-endsauce'],

  webdriver: {},

  test_settings: {
    default: {
      launch_url: 'https://www.davidmello.com',
      skip_testcases_on_fail: false,
      use_ssl: true,
      silent: true,
      disable_error_log: false,
      webdriver: {
        start_process: false,
      },

      desiredCapabilities: {
        browserName: 'chrome',
        screenResolution: '1920x1080',
        browserVersion: 'latest',
        javascriptEnabled: true,
        acceptSslCerts: true,
        timeZone: 'New York',
        chromeOptions: {
          w3c: true,
        },
        'sauce:options': {
          username: '${SAUCE_USERNAME}',
          accessKey: '${SAUCE_ACCESS_KEY}',
          // https://docs.saucelabs.com/dev/cli/sauce-connect-proxy/#--region
          region: 'us-west-1',
          // https://docs.saucelabs.com/dev/test-configuration-options/#tunnelidentifier
          // parentTunnel: '',
          // tunnelIdentifier: '',
          // For setting a specific build number on the test run from your CI (defaults to random string)
          // https://docs.saucelabs.com/visual/e2e-testing/integrations/continuous-integration/#2-integrate-your-ci-build
          // build: process.env.BUILD_NUMBER
        },
        'sauce:visual': {
          // API key found Account -> API Key from within Sauce Visual portal
          apiKey: '${SAUCE_VISUAL_API_KEY}',
          projectName: 'visual regression testing',
          viewportSize: '1920x1080',
        },
      },
      selenium: {
        port: 443,
        host: 'hub.screener.io',
        protocol: 'https',
        path: '/wd/hub',
        start_process: false,
      },
    },
  },
};
