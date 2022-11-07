 class ContactUs {
    get title() { return $('.section_header') };
    get firstName() { return $ ("form#contact_form > input[name='first_name']")};
    get lastName() { return $("//form[@id='contact_form']/input[@name='last_name']")};
    get email() { return $("//form[@id='contact_form']/input[@name='email']")};
    get comments() { return $("//form[@id='contact_form']/textarea[@name='message']")};
    get resetBtn() { return $("//div[@id='form_buttons']/input[@value='RESET']")};
    get submitBtn() { return $("//div[@id='form_buttons']/input[@value='SUBMIT']")};
    get successMsg() { return $("//div[@id='contact_reply']/h1[.='Thank You for your Message!']")};
     /**
      *
      * @param {String} name
      * @param {String} lastName
      * @param {String} email
      * @param {String} comments
      * @returns {Promise<[*,*,*,*]>}
      */
    async fillTheForm(name, lastName, email, comments ){
        await this.firstName.setValue(name);
        await this.lastName.setValue(lastName);
        await this.email.setValue(email);
        await this.comments.setValue(comments);

        const formValues = [name,lastName,email,comments];
        return formValues
    }

     /**
      *
      * @param {String} name
      * @param {String} lastName
      * @param {String} email
      * @param {String} comments
      * @returns {Promise<void>}
      */

    async fillAndSubmit(name,lastName,email,comments){
        await this.firstName.setValue(name);
        await this.lastName.setValue(lastName);
        await this.email.setValue(email);
        await this.comments.setValue(comments);

        await this.submitBtn.click()
    }

     /**
      *
      * @param {Array} fieldNames supported (firstName,lastName,email,comments)
      * @returns {Promise<void>}
      */

    async clearField(fieldNames){
        for (const field of fieldNames) {
            await this[field].clearValue()
        }
     }

     async allFieldsAreDisplayed(){
         await expect(this.firstName).toBeDisplayed()
         await expect(this.lastName).toBeDisplayed()
         await expect(this.email).toBeDisplayed()
         await expect(this.comments).toBeDisplayed()
         await expect(this.submitBtn).toBeDisplayed()
         await expect(this.resetBtn).toBeDisplayed()
     }

     async resetFields(){
        await this.resetBtn.click();
     }
}

export default new ContactUs();

