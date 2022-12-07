import Home from "../pages/Home";

describe('navigate to home page', function () {
    it('should open home page', async function () {
        await browser.url('/')
    });
});

describe('home page content', function () {
    it('should check if all the pages are displayed', async function () {
        const expected = await Home.listPages()
        expect(expected.length).toEqual(17)
    });
    it('should check names of all pages', async function () {
        const expected = ['CONTACT US', 'LOGIN PORTAL', 'BUTTON CLICKS', 'TO DO LIST', 'PAGE OBJECT MODEL', 'ACCORDION & TEXT AFFECTS (APPEAR & DISAPPEAR)', 'DROPDOWN, CHECKBOXE(S) & RADIO BUTTON(S)', 'AJAX LOADER', 'ACTIONS', 'SCROLLING AROUND', 'POPUP & ALERTS', 'IFRAME', 'HIDDEN ELEMENTS', 'DATA, TABLES & BUTTON STATES', 'AUTOCOMPLETE TEXTFIELD', 'FILE UPLOAD', 'DATEPICKER']
        const actual = await Home.listPages()
        expect(expected).toEqual(actual)
    });
});

describe('perform navigation and window switch', function () {
    it('should navigate to new page and switch window', async function () {
        await Home.contactUs.click()
        await browser.switchWindow('Contact Us')
        expect(await browser.getTitle()).toEqual('WebDriver | Contact Us')
    });
});
