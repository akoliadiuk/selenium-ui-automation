export const driver = require("selenium-webdriver");
export default new driver.Builder().forBrowser("chrome").build();