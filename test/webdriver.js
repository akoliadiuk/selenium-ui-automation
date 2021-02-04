require('chromedriver');
export const webdriver = require("selenium-webdriver");
const TIMEOUT = 30000;

let chromeCapabilities = webdriver.Capabilities.chrome();
let chromeOptions = { 'args': ['--start-maximized'] };
chromeCapabilities.set('goog:chromeOptions', chromeOptions);
const browser = new webdriver
    .Builder()
    .forBrowser("chrome")
    .withCapabilities(chromeCapabilities)
    .build();

    browser.then(async () => {
        await browser
            .manage()
            .setTimeouts({ 'implicit': TIMEOUT, 'pageLoad': TIMEOUT, 'script': TIMEOUT })
    });

export default browser
