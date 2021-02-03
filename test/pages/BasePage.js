import browser from '../webdriver';
const BASE_URL = "https://studio.wibbitz.com";

export default class BasePage {
    constructor() {
        this.browser = browser;
        this.url = BASE_URL;
    }

    open() {
        this.browser.get(this.url);
        this.waitUntilLoaded();
        return this;
    }

    waitUntilLoaded() {
        return this;
    }
}