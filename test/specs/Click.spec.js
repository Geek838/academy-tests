import Click from "../pages/Click";

describe('Open Button Click page', function () {
    it('should navigate to right URL',async function () {
        await browser.url('Click-Buttons/index.html')
        expect(await browser.getUrl()).toEqual('https://www.webdriveruniversity.com/Click-Buttons/index.html')
    });
    it('should get the title', async function () {
        expect(await browser.getTitle()).toEqual('WebDriver | Button Clicks')
    });
});
describe('should perform clicks', function () {
    it('should use webdriver click', async function () {
        await Click.clickWeb()
    });
    it('should use JS click', async function () {
        await Click.clickJS()
    });
    it('should move to button and click', async function () {
        await Click.clickMove()
    });
})