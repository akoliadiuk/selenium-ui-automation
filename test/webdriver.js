require('chromedriver');
export const webdriver = require("selenium-webdriver");
let chromeCapabilities = webdriver.Capabilities.chrome();
let chromeOptions = { 'args': ['--start-maximized'] };
chromeCapabilities.set('goog:chromeOptions', chromeOptions);
export default new webdriver
    .Builder()
    .forBrowser("chrome")
    .withCapabilities(chromeCapabilities)
    .build();