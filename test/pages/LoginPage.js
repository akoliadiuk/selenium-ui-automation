import BasePage from "./BasePage";
import { By } from "selenium-webdriver";
import { until } from "selenium-webdriver";
import HomePage from "./HomePage";

export default class LoginPage extends BasePage {
    #emailFieldLocator;
    #passwordFieldLocator;
    #submitButtonLocator;

    constructor() {
        super();
        this.url += "/#/login";
        this.#emailFieldLocator = "input[name=email]";
        this.#passwordFieldLocator = "input[name=password]";
        this.#submitButtonLocator = "button[name=submit]";
    }

    async open() {
        await super.open();
        return await this.waitUntilLoaded();
    }

    async #emailField() {
        return this.browser.findElement(By.css(this.#emailFieldLocator));
    }

    async #passwordField() {
        return this.browser.findElement(By.css(this.#passwordFieldLocator));
    }

    async #submitButton() {
        return this.browser.findElement(By.css(this.#submitButtonLocator));
    }

    async waitUntilLoaded() {
        await this.browser.wait(until.elementLocated(By.css(this.#emailFieldLocator)));
        await this.browser.wait(until.elementIsVisible(await this.#emailField()))
        return this;
    }

    async login(email, password) {
        await (await this.#emailField()).sendKeys(email);
        await (await this.#passwordField()).sendKeys(password)
        await (await this.#submitButton()).click();
        return await new HomePage().waitUntilLoaded();
    }
}