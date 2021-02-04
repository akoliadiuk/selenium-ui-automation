import {Given, setDefaultTimeout, Then, When} from '@cucumber/cucumber';
import LoginPage from "../../pages/LoginPage";
import { expect } from 'chai';

setDefaultTimeout(60 * 1000);

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;
const TEST_CLIP_ID = "baa1b6dd245a4488db126950af86481cc";

let page = new LoginPage();

Given(/^I navigate to the login page$/, async function () {
    page = await page.open();
});

Given(/^I log in to the home page$/, async function () {
    page = await page.login(EMAIL, PASSWORD);
});

When(/^I click on My First Studio Video$/, async function () {
    page = await page.previewClip(TEST_CLIP_ID);
});

When(/^I click on the play button$/, async function () {
    page = await page.playPreview();
});

Then(/^I should see the video playing$/, async function () {
    await page.isPlayingClip().then(res => {
        expect(res).to.be.true;
    })
});