import BasePage from "./BasePage";
import {By, until} from "selenium-webdriver";

export default class HomePage extends BasePage {
    #clipPreviewImageLocator;
    #previewImageLocator;
    #playButtonLocator;
    #pauseControlButtonLocator;

    constructor() {
        super();
        this.url += "#/app/home";
        this.#clipPreviewImageLocator = '[data-clip-id=clipId] .preview-image';
        this.#previewImageLocator = '.preview-image';
        this.#playButtonLocator = 'span.icon-Play.ready';
        this.#pauseControlButtonLocator = '.video-controls span.icon-Pause';
    }

    async open() {
        await super.open();
        return await this.waitUntilLoaded();
    }

    async #previewImage() {
        return this.browser.findElement(By.css(this.#previewImageLocator));
    }

    async #clipPreviewImage(clipId) {
        this.#clipPreviewImageLocator = this.#clipPreviewImageLocator.replace('clipId', clipId);
        return this.browser.findElement(By.css(this.#clipPreviewImageLocator));
    }

    async #playButton() {
        return this.browser.findElement(By.css(this.#playButtonLocator));
    }

    async #pauseControlButton() {
        return this.browser.findElement(By.css(this.#pauseControlButtonLocator));
    }

    async previewClip(clipId) {
        await (await this.#clipPreviewImage(clipId)).click();
        await this.browser.wait(until.elementIsVisible(await this.#playButton()));
        return this;
    }

    async playPreview() {
        let playButton = await this.#playButton()
        await playButton.click();
        return this;
    }

    async isPlayingClip() {
        return await (await this.#pauseControlButton()).isDisplayed();
    }

    async waitUntilLoaded() {
        await this.browser.wait(until.elementLocated(By.css(this.#previewImageLocator)))
        await this.browser.wait(until.elementIsVisible(await this.#previewImage()));
        return this;
    }
}