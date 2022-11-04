import ContactUs from "../pages/contact-us";

describe('Navigate to contact page', () => {
    it('Should open contact page and validate it', async () => {
        await browser.url('Contact-Us/contactus.html')
        await expect(ContactUs.title).toHaveText('CONTACT US')
    });
});

describe('All the elements are present',()=>{
    it('should check if all fields are displayed', async function () {
        await ContactUs.allFieldsAreDisplayed()
    });
})

describe('Typing in the field',  function () {
    it('should type in first Name field', async function () {
        await ContactUs.firstName.setValue('John')
        const name = await ContactUs.firstName.getValue()
        expect(name).toEqual('John')
    });
    it('should type in Last Name field', async function () {
        const lastName = ContactUs.lastName
        await lastName.setValue('Doe')
        expect(await lastName.getValue()).toEqual('Doe')
    });
    it('should type in email address', async function () {
        const email = ContactUs.email
        await email.setValue("test@test.com")
        expect(await email.getValue()).toEqual('test@test.com')
    });
    it('should should type in comments', async function () {
        const comments = ContactUs.comments
        await comments.setValue('Brilliant website for learning')
        expect(await comments.getValue()).toEqual('Brilliant website for learning')
    });
    it('should clear all the fields', async function () {
        await ContactUs.clearField(['firstName','lastName','email','comments'])
        const actualValues = []
        actualValues.push(await ContactUs.firstName.getValue(),await ContactUs.lastName.getValue(),await ContactUs.email.getValue(),await ContactUs.comments.getValue())
        expect(actualValues).toEqual(['','','',''])
    });

});

describe('Fill all the fields and Submit form', function () {
    it('should fill all the fields', async function () {
        const filledValues = await ContactUs.fillTheForm('John','Doe','John@test.com','Amazing Website')
        const actual = [await ContactUs.firstName.getValue(),await ContactUs.lastName.getValue(),await ContactUs.email.getValue(),await ContactUs.comments.getValue()]
        expect(actual).toEqual(filledValues)
    });
    it('should fill all the fields and submit', async function () {
        const filledValues = await ContactUs.fillAndSubmit('John','Doe','John@test.com','Amazing Website')
        expect(await ContactUs.successMsg.getText()).toEqual('Thank You for your Message!')
    });

});

describe('Clear fields with reset button', function () {
    it('should reset all fields when clicking reset button',async function () {
        await browser.url('Contact-Us/contactus.html')
        const filledValues = await ContactUs.fillTheForm('John','Doe','John@test.com','Amazing Website')
        await ContactUs.resetFields()
        const actualValues = []
        actualValues.push(await ContactUs.firstName.getValue(),await ContactUs.lastName.getValue(),await ContactUs.email.getValue(),await ContactUs.comments.getValue())
        expect(actualValues).toEqual(['','','',''])
    });
});