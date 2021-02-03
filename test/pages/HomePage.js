import BasePage from "./BasePage";

export default class HomePage extends BasePage {
    constructor() {
        super();
        this.url += "#/app/home";
    }

    waitUntilLoaded() {
        return this;
    }
}