class Login {
    get userName() { return $("input#text")};
    get password() { return $("/html//input[@id='password']")};
    get loginBtn() { return $("/html//button[@id='login-button']")};

    /**
     *
     * @param {string} userName
     * @param {string} password
     * @returns {Promise<void>}
     */

    async loginUser(userName, password){
        await this.userName.setValue(userName)
        await this.password.setValue(password)
        await this.loginBtn.click()
    }

}

export default new Login()