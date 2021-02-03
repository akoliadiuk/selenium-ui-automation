import browser from './webdriver';

module.exports = function() {
    this.After(function() {
        return this.browser.manage().deleteAllCookies();
    });

    this.registerHandler("AfterFeatures", function() {
        return browser.quit();
    });
};