describe('File upload test cases', function () {
    it('should navigate to file upload page',async function () {
        await browser.url('File-Upload/index.html')
        expect(await browser.getTitle()).toEqual('File Upload')
    });
    it('should upload the file', async function () {
        let uploadField = await $('#myFile')
        await uploadField.addValue(`${process.cwd()}/test/data/dummyfile.txt`)
        await $('#submit-button').click()
        expect(await browser.getAlertText()).toEqual('Your file has now been uploaded!')
    });
    it('should close the alert', async function () {
        await browser.acceptAlert()
        expect(await browser.isAlertOpen()).toEqual(false)
    });
});