import Login from "../pages/login";

describe('navigate to login page', function () {
    it('should ', async function () {
        await browser.url('Login-Portal/index.html')
    });
});

describe('Locate all elements', function () {
    it('should locate username',async function () {
        expect(Login.userName).toBeDisplayed()
    });
    it('should locate password', async function () {
       expect(Login.password).toBeDisplayed()
    });
    it('should locate login button',async function () {
        expect(Login.loginBtn).toBeDisplayed()
    });
});

describe('Login user', function () {
    it('should not login user with incorrect username and password', async function () {
        await Login.userName.setValue('Admin')
        await Login.password.setValue('pass123')
        await Login.loginBtn.click()
        expect(await browser.getAlertText()).toEqual('validation failed')
    });
    it('should login with valid user and password', async function () {
        await Login.loginUser('webdriver', 'webdriver123')
        expect(await browser.getAlertText()).toEqual('validation succeeded')
    });
});

describe('Login page check', function () {
    it('should should check title',async function () {

    });
});