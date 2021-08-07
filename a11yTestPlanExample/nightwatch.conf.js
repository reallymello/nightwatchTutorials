const Services = {};
loadServices();

module.exports = {
    src_folders: ["test"],
    page_objects_path: 'page-objects',
    custom_commands_path: './node_modules/nightwatch-axe-verbose/src/commands',
    globals_path: './globals.js',
    webdriver: {},
    test_settings: {
        default: {

            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {}
            },

            webdriver: {
                start_process: true,
                port: 9515,
                server_path: (Services.chromedriver ? Services.chromedriver.path : ''),
                cli_args: [
                    // --verbose
                ]
            }
        },

        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                alwaysMatch: {
                    // Enable this if you encounter unexpected SSL certificate errors in Firefox
                    // acceptInsecureCerts: true,
                    'moz:firefoxOptions': {
                        args: [
                            // '-headless',
                            // '-verbose'
                        ],
                    }
                }
            },
            webdriver: {
                start_process: true,
                port: 4444,
                server_path: (Services.geckodriver ? Services.geckodriver.path : ''),
                cli_args: [
                    // very verbose geckodriver logs
                    // '-vv'
                ]
            }
        },

        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    // This tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
                    // w3c: false,
                    // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
                    args: [
                        //'--no-sandbox',
                        //'--ignore-certificate-errors',
                        //'--allow-insecure-localhost',
                        //'--headless'
                    ]
                }
            },

            webdriver: {
                start_process: true,
                port: 9515,
                server_path: (Services.chromedriver ? Services.chromedriver.path : ''),
                cli_args: [
                    // --verbose
                ]
            }
        }
    }
};

function loadServices() {
    try {
        Services.chromedriver = require('chromedriver');
    } catch (err) {}

    try {
        Services.geckodriver = require('geckodriver');
    } catch (err) {}
}