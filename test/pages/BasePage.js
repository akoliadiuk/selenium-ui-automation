import browser from '../webdriver';

const BASE_URL = "https://studio.wibbitz.com";

export default class BasePage {
    constructor() {
        this.browser = browser;
        this.url = BASE_URL;
        this.waitTime = 30000;
    }

    async open() {
        await this.browser.get(this.url);
        return this;
    }
}