import BasePage from "./BasePage";
import { By } from "selenium-webdriver";
import { until } from "selenium-webdriver";
import HomePage from "./HomePage";

export default class LoginPage extends BasePage {
    constructor() {
        super();
        this.url += "/#/login";
    }

    #emailField() {
        return this.browser.findElement(By.css("input[name=email]"));
    }

    #passwordField() {
        return this.browser.findElement(By.css("input[name=password]"));
    }

    #submitButton() {
        return this.browser.findElement(By.css("button[name=submit]"))
    }

    waitUntilLoaded() {
        this.browser.wait(until.elementIsVisible(this.#emailField()));
        return this;
    }

    login(email, password) {
        this.#emailField().sendKeys(email);
        this.#passwordField().sendKeys(password)
        this.#submitButton().click();
        return new HomePage();
    }
}