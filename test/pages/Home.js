class Home {
    get pages() { return $$('.section-title > h1')};
    get  contactUs() { return $("/html//a[@id='contact-us']//h1[.='CONTACT US']")}
    get login() {return $("/html//a[@id='login-portal']//h1[.='LOGIN PORTAL']")}
    get buttonClicks() { return $("/html//a[@id='button-clicks']//h1[.='BUTTON CLICKS']")}
    get toDoList() { return $("/html//a[@id='to-do-list']//h1[.='TO DO LIST']")}

    async listPages() {
        return await this.pages.map(item => item.getText())
    }
}

export default new Home;